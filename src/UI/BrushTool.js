import React, { forwardRef, useImperativeHandle } from 'react';

const BrushTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context, color) => {
        context.fillStyle = color;
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    const mouseMove = (event, context) => {        
        context.rect(event.clientX, event.clientY, 5, 5);
        context.shadowColor = 'gray';
        context.shadowBlur = 10;
        context.shadowOffsetX = 20;
        context.shadowOffsetY = 5;
        context.fill();
    }

    const touchStart = (event, context, color) => {
        context.fillStyle = color;
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    const touchMove = (event, context) => {
        context.rect(event.clientX, event.clientY, 20, 20);
        context.shadowColor = 'gray';
        context.shadowBlur = 10;
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
        context.fill();
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
            <input type="radio" name="painttools" value="brush" onClick={ props.handleClick } onTouchStart={ props.handleClick }/>
            <img src={props.src} alt={props.alt}  />
        </label>
    );
});

export default BrushTool;
