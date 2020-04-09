import React, { forwardRef, useImperativeHandle } from 'react';

const PencilTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context) => {
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "blue"
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    const mouseMove = (event, context) => {
        // context.strokeStyle = props.color;
        // context.lineWidth = props.lineWidth;
        context.lineTo(event.clientX,  event.clientY);
        context.stroke();
        console.log("mouse down in Pencil");
    }

    useImperativeHandle(ref, () => {
        return {
          mouseMove: mouseMove,
          mouseDown: mouseDown
        };
      });

    return (
        <label>
            <input type="radio" name="painttools" value="pencil" onClick={ props.handleClick }/>
            <img src={props.src} alt={props.alt}  />
        </label>
    );
});

export default PencilTool;
