import React, { forwardRef, useImperativeHandle } from 'react';

const PencilTool = forwardRef((props, ref) =>  {
    const toolCallback = (context) => {
        context.globalCompositeOperation = 'source-over'
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
        <label className="tool-label" id="pencil" data-tooltip="Pencil Tool">
            <input type="radio" name="painttools" value="pencil" onClick={ props.handleClick } onTouchStart={ props.handleClick }/>
            <img src={props.src} alt={props.alt} />
        </label>
    );
});

export default PencilTool;
