import React from 'react';
import ToolPanel from './ToolPanel'

export default class DrawGrid extends React.Component {
    constructor() {
        super();
        this.state = { drawing: false, context: null };
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let canvasRect = this.canvasRef.current.getBoundingClientRect();
        this.canvasRef.current.width = canvasRect.width;
        this.canvasRef.current.height = canvasRect.height;
    }

    mouseDown(event) {
        let context = this.canvasRef.current.getContext('2d');
        context.beginPath();
        context.moveTo(event.clientX - 1, event.clientY - 1);
        this.setState({drawing: true});
    }

    mouseMove(event) {
        if(this.state.drawing) {   
            // let ctx = this.refs.canvasRef.getContext('2d');
            // ctx.rect(event.clientX, event.clientY, 5, 5);
            // ctx.shadowColor = 'gray';
            // ctx.shadowBlur = 10;
            // ctx.shadowOffsetX = 10;
            // ctx.shadowOffsetY = 10;
            // ctx.fillStyle = "red";
            // ctx.fill();
            // console.log(event.currentTarget.getBoundingClientRect());
            // console.log(window.scrollX);
            let context = this.canvasRef.current.getContext('2d');
            context.strokeStyle = 'blue';
            context.lineWidth = 5;
            
            context.lineTo(event.clientX,  event.clientY);
            context.stroke();
        }
    }

    mouseUp(event) {
        this.setState({drawing: false});
    }

    render() {
        return(
            <div>
                <canvas id="canvas" ref={this.canvasRef} onMouseDown={ this.mouseDown } onMouseMove={ this.mouseMove } onMouseUp={ this.mouseUp }></canvas>
                <ToolPanel/>
            </div>
        );
    }
}