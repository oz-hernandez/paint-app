import React from 'react';
import ToolPanel from './ToolPanel'

export default class DrawGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { drawing: false, context: null, color: "black" };
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.canvasRef = React.createRef();
        this.ref = React.createRef();
    }

    handleColorChange(event) {
        this.setState({ color: event.target.value });
    }

    componentDidMount() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        let canvasRect = this.canvasRef.current.getBoundingClientRect();
        this.canvasRef.current.width = canvasRect.width;
        this.canvasRef.current.height = canvasRect.height;
        this.setState({ context: this.canvasRef.current.getContext('2d') });
        this.canvasRef.current.getContext('2d').globalCompositeOperation = 'destination-out';
    }

    mouseDown(event) {
        this.canvasRef.current.getContext('2d').strokeStyle = this.state.color;
        this.setState({drawing: true});
        this.state.context.beginPath();
        this.state.context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    mouseMove(event) {
        if(this.state.drawing) {
            this.state.context.lineTo(event.clientX,  event.clientY);
            this.state.context.stroke();
        }
    }

    mouseUp(event) {
        this.setState({drawing: false});
    }

    touchStart(event) {
        this.setState({drawing: true});
        this.state.context.beginPath();
        this.state.context.moveTo(event.touches[0].clientX - 1, event.touches[0].clientY - 1);
    }

    touchMove(event) {
        if(this.state.drawing) {
            this.state.context.lineTo(event.touches[0].clientX,  event.touches[0].clientY);
            this.state.context.stroke();
        }
    }

    touchEnd(event) {
        this.setState({drawing: false});
    }

    render() {
        return(
            <div>
                <canvas id="canvas" ref={this.canvasRef} onTouchStart={ this.touchStart } onTouchMove={ this.touchMove } onTouchEnd={ this.touchEnd } onMouseDown={ this.mouseDown } onMouseMove={ this.mouseMove } onMouseUp={ this.mouseUp }></canvas>
                <div className="bottom-panel">
                    <div className="tool-panel">
                        <ToolPanel ref={this.ref} color={this.state.color} context={this.state.context} />
                    </div>
                    <div className="custom-panel">
                        <input ref={this.color} type="color" name="color-picker" onChange={ this.handleColorChange }/>
                    </div>
                </div>
            </div>
        );
    }
}