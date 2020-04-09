import React from 'react';
import ToolPanel from './ToolPanel'

export default class DrawGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { drawing: false, context: null };
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.canvasRef = React.createRef();
        this.ref = React.createRef();
    }

    componentDidMount() {
        let canvasRect = this.canvasRef.current.getBoundingClientRect();
        this.canvasRef.current.width = canvasRect.width;
        this.canvasRef.current.height = canvasRect.height;
    }

    mouseDown(event) {
        let context = this.canvasRef.current.getContext('2d');
        this.setState({drawing: true});
        this.ref.current.mouseDown(event, context);
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

    render() {
        return(
            <div>
                <canvas id="canvas" ref={this.canvasRef} onMouseDown={ this.mouseDown } onMouseMove={ this.mouseMove } onMouseUp={ this.mouseUp }></canvas>
                <ToolPanel ref={this.ref} color={this.props.color}/>
            </div>
        );
    }
}