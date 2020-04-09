import React, { useRef } from 'react';
import PencilTool from './PencilTool';
import EraserTool from './EraserTool';
import SprayTool from './SprayTool';

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

    mouseDown(event, context) {
        if(active) {
            this.activeItem.mouseDown(event, context);
            console.log("we're active!");
        }
    }

    mouseMove(event, context) {
        if(active) {
            this.activeItem.mouseMove(event, context);
        }
    }

    render() {
        return (
            <div className="bottom-panel">
                <div className="tool-panel">
                    <PencilTool ref={ (ref) => {this.activeTool['pencil'] = ref; }} handleClick={ this.handleClick } src={require('../assets/pencil.png')} tool="Pencil" color={"blue"} lineWidth={5}/>
                    <EraserTool ref={ (ref) => {this.activeTool['eraser'] = ref; }} handleClick={ this.handleClick } src={require('../assets/eraser.png')} tool="Pencil" color={"blue"} lineWidth={5}/>
                </div>
            </div>
        );
    }
}
