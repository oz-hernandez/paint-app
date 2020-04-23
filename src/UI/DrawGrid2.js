import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import ToolPanel from './ToolPanel'

export default function DrawGrid2() {
        // this.state = { drawing: false, context: null, color: "black" };
        // this.mouseDown = this.mouseDown.bind(this);
        // this.mouseMove = this.mouseMove.bind(this);
        // this.mouseUp = this.mouseUp.bind(this);
        // this.touchStart = this.touchStart.bind(this);
        // this.touchMove = this.touchMove.bind(this);
        // this.touchEnd = this.touchEnd.bind(this);
        // this.handleColorChange = this.handleColorChange.bind(this);
    const canvasRef = useRef(null);

    const [color, setColor] = useState("black");
    const [width, setLineWidth] = useState(5);
    const [context, setContext] = useState(null);
    const [isDrawing, setDrawing] = useState(false);

    window.addEventListener('resize', () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
        let serializedImg = new Image();
        serializedImg.src = canvas.toDataURL("image/png");
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.drawImage(serializedImg, 0, 0); 
        console.log("drawing");
    });
    
    useEffect(() => {
        console.log("useEffect called");
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
        // ctx.strokeStyle = color;
        // ctx.lineWidth = width;
        // let vh = window.innerHeight * 0.01;
        // document.documentElement.style.setProperty('--vh', `${vh}px`);
        // let canvasRect = canvasRef.current.getBoundingClientRect();
        // canvasRef.current.width = canvasRect.width;
        // canvasRef.current.height = canvasRect.height;
        // let serializedImg = new Image();
        // serializedImg.src = canvas.toDataURL("image/png");
        // // canvas.width = window.innerWidth;
        // // canvas.height = window.innerHeight;
        // ctx.drawImage(serializedImg, 0, 0); 
        console.log("useEffect called");
    });

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    // componentDidMount() {
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    //     let canvasRect = this.canvasRef.current.getBoundingClientRect();
    //     this.canvasRef.current.width = canvasRect.width;
    //     this.canvasRef.current.height = canvasRect.height;
    //     this.setState({ context: this.canvasRef.current.getContext('2d') });
    //     this.canvasRef.current.getContext('2d').globalCompositeOperation = 'destination-out';
    // }

    // componentWillUpdate() {
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    //     let canvasRect = this.canvasRef.current.getBoundingClientRect();
    //     this.canvasRef.current.width = canvasRect.width;
    //     this.canvasRef.current.height = canvasRect.height;
    //     this.canvasRef.current.getContext('2d').strokeStyle = this.state.color;
    // }

    function mouseDown(event) {

        setDrawing(true);
        context.beginPath();
        context.moveTo(event.clientX - 1, event.clientY - 1);
    }

    function mouseMove(event) {
        if(isDrawing) {
            context.lineTo(event.clientX,  event.clientY);
            context.stroke();
        }
    }

    function mouseUp() {
        setDrawing(false);
    }

    function touchStart(event) {
        // this.canvasRef.current.getContext('2d').strokeStyle = this.state.color;
        // this.setState({drawing: true});
        // this.state.context.beginPath();
        // this.state.context.moveTo(event.touches[0].clientX - 1, event.touches[0].clientY - 1);
    }

    function touchMove(event) {
        // if(this.state.drawing) {
        //     this.state.context.lineTo(event.touches[0].clientX,  event.touches[0].clientY);
        //     this.state.context.stroke();
        // }
    }

    function touchEnd() {
        // this.setState({drawing: false});
    }

    return(
        <div>
            <canvas id="canvas" width={window.innerWidth} height={window.innerHeight} ref={canvasRef} onTouchStart={ touchStart } onTouchMove={ touchMove } onTouchEnd={ touchEnd } onMouseDown={ mouseDown } onMouseMove={ mouseMove } onMouseUp={ mouseUp }></canvas>
            <div className="bottom-panel">
                <div className="tool-panel">
                    <ToolPanel color={color} context={context} />
                </div>
                <div className="custom-panel">
                    <input type="color" name="color-picker" onChange={ handleColorChange }/>
                </div>
            </div>
        </div>
    );
}