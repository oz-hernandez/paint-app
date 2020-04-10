import React, { forwardRef, useImperativeHandle } from 'react';

const EraserTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context) => {
        context.globalCompositeOperation = 'destination-out'
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "white"
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    const touchStart = (event, context) => {
        context.beginPath();
        context.lineWidth = props.lineWidth;
        context.strokeStyle = props.color;
        context.moveTo(event.touches[0].clientX - 1, event.touches[0].clientY - 1);
    }

    const mouseMove = (event, context) => {
        context.lineTo(event.clientX,  event.clientY);
        context.stroke();
    }

    const touchMove = (event, context) => {
        context.lineTo(event.touches[0].clientX,  event.touches[0].clientY);
        context.stroke();
    }

    useImperativeHandle(ref, () => {
        return {
          mouseMove: mouseMove,
          mouseDown: mouseDown,
          touchStart: touchStart,
          touchMove: touchMove
        };
      });

    return (
        <label>
            <input type="radio" name="painttools" value="eraser" onClick={ props.handleClick } onTouchStart={ props.handleClick }/>
            <img src={props.src} alt={props.alt} />
        </label>
    );
});

export default EraserTool;
