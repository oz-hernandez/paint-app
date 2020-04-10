import React, { forwardRef, useImperativeHandle } from 'react';

const GraffitiTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context, color) => {
        context.beginPath();
        context.lineWidth = 5;
        context.fillStyle = color;
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    const mouseMove = (event, context) => {
        context.lineTo(event.clientX,  event.clientY);        
        // context.rect(event.clientX, event.clientY, 20, 50);
        context.shadowColor = 'gray';
        context.shadowBlur = 10;
        context.shadowOffsetX = 20;
        context.shadowOffsetY = 5;
        context.stroke();
        // context.fill();
    }

    const touchStart = (event, context, color) => {
        context.fillStyle = color;
        context.moveTo(event.touches[0].clientX - 1, event.touches[0].clientY - 1);
    }

    const touchMove = (event, context) => {
        context.lineTo(event.touches[0].clientX,  event.touches[0].clientY);        
        // context.rect(event.clientX, event.clientY, 20, 50);
        context.shadowColor = 'gray';
        context.shadowBlur = 10;
        context.shadowOffsetX = 20;
        context.shadowOffsetY = 5;
        context.stroke();
        // context.fill();
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
            <input type="radio" name="painttools" value="graffiti" onClick={ props.handleClick } onTouchStart={ props.handleClick }/>
            <img src={props.src} alt={props.alt}  />
        </label>
    );
});

export default GraffitiTool;
