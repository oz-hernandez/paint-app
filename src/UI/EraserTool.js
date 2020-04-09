import React, { forwardRef, useImperativeHandle } from 'react';

const EraserTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context) => {
    }

    const mouseMove = (event, context) => {
        console.log("mouse down in Eraser");
    }

    const touchStart = (event, context) => {

    }

    const touchMove = (event, context) => {

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
            <input type="radio" name="painttools" value="eraser" onClick={ props.handleClick } onTouchStart={ props.handleClick }/>
            <img src={props.src} alt={props.alt} />
        </label>
    );
});

export default EraserTool;
