import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

const PencilTool = forwardRef((props, ref) => { 
    const [context, setContext] = useState(props.context);

    const mouseDown = (event) => {
        context.globalCompositeOperation = 'source-over'
        context.beginPath();
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    useEffect(() => {
        if(props.context) {
            setContext(props.context);
            props.context.strokeStyle = props.color;
            props.context.lineWidth = 5;
        }
        
    }, [props.color, props.context]);
    
    const touchStart = (event) => {
        context.beginPath();
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
