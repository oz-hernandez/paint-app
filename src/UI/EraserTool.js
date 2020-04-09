import React, { forwardRef, useImperativeHandle } from 'react';

const EraserTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context) => {
    }

    const mouseMove = (event, context) => {
        console.log("mouse down in Eraser");
    }

    useImperativeHandle(ref, () => {
        return {
          mouseMove: mouseMove,
          mouseDown: mouseDown
        };
      });

    return (
        <label>
            <input type="radio" name="painttools" value="eraser" onClick={ props.handleClick } />
            <img src={props.src} alt={props.alt} />
        </label>
    );
});

export default EraserTool;
