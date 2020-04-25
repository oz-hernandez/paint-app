import React from 'react';
import ToolPanel from './ToolPanel';
import { default as getRandomColor } from './FetchColor';

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
        this.clearCanvas = this.clearCanvas.bind(this);
        this.pickColor = this.pickColor.bind(this);
        this.canvasRef = React.createRef();
        this.ref = React.createRef();
    }

    handleColorChange(event) {
        this.setState({ color: event.target.value });
    }

    clearCanvas() {
        this.state.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    pickColor() {        
        getRandomColor("http://www.colr.org/json/color/random").then((color) => {
            console.log(color['new_color']);
            this.setState({ color: "#" + color['new_color'] });
        }).catch((error) => {console.log("an error occured: " + error)});    
    }

    componentDidMount() {
        this.canvasRef.current.width = window.innerWidth;
        this.canvasRef.current.height = window.innerHeight;
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

    mouseUp() {
        this.setState({drawing: false});
    }

    touchStart(event) {
        this.canvasRef.current.getContext('2d').strokeStyle = this.state.color;
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

    touchEnd() {
        this.setState({drawing: false});
    }

    render() {
        return(
            <div>
                <canvas id="canvas" ref={this.canvasRef} onTouchStart={ this.touchStart } onTouchMove={ this.touchMove } onTouchEnd={ this.touchEnd } onMouseDown={ this.mouseDown } onMouseMove={ this.mouseMove } onMouseUp={ this.mouseUp }></canvas>
                <div className="bottom-panel">
                    <div className="tool-panel">
                        <ToolPanel ref={this.ref} context={this.state.context} />
                    </div>
                    <div className="custom-panel">
                        <input ref={this.color} type="color" name="color-picker" onChange={ this.handleColorChange }/>
                    </div>
                    <div className="remove">
                        <button class="icon-btn add-btn" onClick={this.clearCanvas}>  
                            <div class="btn-txt">Clear Canvas</div>
                        </button>
                    </div>
                    <div className="remove">
                        <button class="icon-btn add-btn" onClick={this.pickColor}>  
                            <div class="btn-txt">Random Color</div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}