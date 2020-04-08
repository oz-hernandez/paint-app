import React from 'react';
import PaintTool from './PaintTool';

export default function ToolPanel(props) {
    return (
        <div className="bottom-panel">
            <div className="tool-panel">
                <PaintTool src={require('../assets/pencil.png')} tool="Pencil" bgColor='white'/>
                <PaintTool src={require("../assets/eraser.png")} tool="eraser" bgColor='white'/>
            </div>
        </div>
    );
}
