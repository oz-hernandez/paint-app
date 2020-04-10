import React, { forwardRef, useImperativeHandle } from 'react';

const PencilTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context, color) => {
        context.globalCompositeOperation = 'source-over'
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = color;
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    const touchStart = (event, context, color) => {
        context.beginPath();
        context.lineWidth = props.lineWidth;
        context.strokeStyle = color;
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
            mouseDown: mouseDown,
            touchStart: touchStart,
            mouseMove: mouseMove,
            touchMove: touchMove  
        };
      });

    return (
        <label>
            <input type="radio" name="painttools" value="pencil" onClick={ props.handleClick } onTouchStart={ props.handleClick }/>
            <img src={props.src} alt={props.alt}  />
        </label>
    );
});

export default PencilTool;
