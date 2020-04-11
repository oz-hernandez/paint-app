import React, { forwardRef, useImperativeHandle, useEffect } from 'react';

const PencilTool = forwardRef((props, ref) =>  {
    const toolCallback = (context, color) => {
        context.globalCompositeOperation = 'source-over'
        context.lineWidth = 5;
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
    }

    useEffect(() => {
        if(props.color && props.context) {
            props.context.strokeStyle = props.color;
        }
    });

    useImperativeHandle(ref, () => {
        return {
          toolCallback: toolCallback
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
