import React, { forwardRef, useImperativeHandle } from 'react';

const EraserTool = forwardRef((props, ref) => {
    const toolCallback = (context) => {
        context.globalCompositeOperation = 'destination-out';
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
    }

    useImperativeHandle(ref, () => {
        return {
          toolCallback: toolCallback
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
