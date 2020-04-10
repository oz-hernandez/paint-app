import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

const GraffitiTool = forwardRef((props, ref) => { 
    const [context, setContext] = useState(props.context);

    const mouseDown = (event) => {
        context.beginPath();
        context.lineWidth = 5;
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    useEffect(() => {
        if(props.context) {
            setContext(props.context);
            props.context.StrokeStyle = props.color;
            props.context.lineWidth = 5;
        }
        
    }, [props.color, props.context]);

    const mouseMove = (event) => {
        context.lineTo(event.clientX,  event.clientY);        
        context.shadowColor = 'gray';
        context.shadowBlur = 20;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.stroke();
    }

    const touchStart = (event) => {
        context.moveTo(event.touches[0].clientX - 1, event.touches[0].clientY - 1);
    }

    const touchMove = (event) => {
        context.lineTo(event.touches[0].clientX,  event.touches[0].clientY);        
        context.shadowColor = 'gray';
        context.shadowBlur = 10;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
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
            <input type="radio" name="painttools" value="graffiti" onClick={ props.handleClick } onTouchStart={ props.handleClick }/>
            <img src={props.src} alt={props.alt}  />
        </label>
    );
});

export default GraffitiTool;
