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
    }

    mouseDown(event) {
        let context = this.canvasRef.current.getContext('2d');
        this.setState({drawing: true});
        this.ref.current.mouseDown(event, context, this.state.color);
    }

    mouseMove(event) {
        let context = this.canvasRef.current.getContext('2d');
        if(this.state.drawing) {
            this.ref.current.mouseMove(event, context);
        }
    }

    mouseUp(event) {
        this.setState({drawing: false});
    }

    touchStart(event) {
        let context = this.canvasRef.current.getContext('2d');
        this.setState({drawing: true});
        this.ref.current.touchStart(event, context, this.state.color);
    }

    touchMove(event) {
        let context = this.canvasRef.current.getContext('2d');
        if(this.state.drawing) {
            this.ref.current.touchMove(event, context);
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
                        <ToolPanel ref={this.ref} color={this.state.color} />
                    </div>
                    <div className="custom-panel">
                        <input ref={this.color} type="color" name="color-picker" onChange={ this.handleColorChange }/>
                    </div>
                </div>
            </div>
        );
    }
}