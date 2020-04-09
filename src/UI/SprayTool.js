import React, { forwardRef, useImperativeHandle } from 'react';

const SprayTool = forwardRef((props, ref) => { 
    const mouseDown = (event, context) => {
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "blue"
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    const mouseMove = (event, context) => {
        // context.strokeStyle = props.color;
        // context.lineWidth = props.lineWidth;
        // let ctx = this.refs.canvasRef.getContext('2d');
            // ctx.rect(event.clientX, event.clientY, 5, 5);
            // ctx.shadowColor = 'gray';
            // ctx.shadowBlur = 10;
            // ctx.shadowOffsetX = 10;
            // ctx.shadowOffsetY = 10;
            // ctx.fillStyle = "red";
            // ctx.fill();
    }

    useImperativeHandle(ref, () => {
        return {
          mouseMove: mouseMove,
          mouseDown: mouseDown
        };
      });

    return (
        <label>
            <input type="radio" name="painttools"/>
            <img src={props.src} alt={props.alt}  />
        </label>
    );
});

export default SprayTool;
