import React from 'react';
import PaintTool from './PaintTool';

export default function ToolPanel() {
    return (
        <div className="tool-panel">
            <PaintTool src={require('../assets/pencil.png')} tool="Pencil" bgColor='white'/>
            <PaintTool src={require("../assets/eraser.png")} tool="eraser" bgColor='white'/>
        </div>
    );
}
