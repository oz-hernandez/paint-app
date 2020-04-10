import React from 'react';
import PencilTool from './PencilTool';
import EraserTool from './EraserTool';
import GraffitiTool from './GraffitiTool';

let active = false;
export default class ToolPanel extends React.Component {
    constructor(props) {
        super(props);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.activeTool = [];
        this.activeItem = [];
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.activeItem = this.activeTool[event.target.value];
        active = true;
    }

    mouseDown(event, context, color) {
        if(active) {
            this.activeItem.mouseDown(event, context, color);
        }
    }

    mouseMove(event, context) {
        if(active) {
            this.activeItem.mouseMove(event, context);
        }
    }

    touchStart(event, context, color) {
        if(active) {
            this.activeItem.touchStart(event, context, color);
        }
    }

    touchMove(event, context) {
        if(active) {
            this.activeItem.touchMove(event, context);
        }
    }

    render() {
        return (                
            <div className="tool-items">
                <PencilTool ref={ (ref) => {this.activeTool['pencil'] = ref; }} handleClick={ this.handleClick } src={require('../assets/pencil.png')} tool="Pencil" />
                <EraserTool ref={ (ref) => {this.activeTool['eraser'] = ref; }} handleClick={ this.handleClick } src={require('../assets/eraser.png')} tool="Eraser" />
                <GraffitiTool ref={ (ref) => {this.activeTool['graffiti'] = ref; }} handleClick={ this.handleClick } src={require('../assets/spray.png')} tool="Graffiti" />
            </div>
        );
    }
}
