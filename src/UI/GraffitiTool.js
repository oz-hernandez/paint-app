import React, { forwardRef, useImperativeHandle } from 'react';

const GraffitiTool = forwardRef((props, ref) => {
    const toolCallback = (context) => {
        context.globalCompositeOperation = 'source-over'
        context.lineWidth = 5;
        context.shadowColor = 'gray';
        context.shadowBlur = 20;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.strokeStyle = props.color;
    }

    useImperativeHandle(ref, () => {
        return {
          toolCallback: toolCallback
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