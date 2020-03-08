import React, { useState } from 'react';

export default function PaintControl(props) {
    function buttonClick(event) {

        setBgColor('AliceBlue');
    }
    const [whiteBG, setBgColor] = useState(true);

    return (
        <label>
            <input type="radio" name="painttools"/>
            <img src={props.src} alt={props.tool} />
        </label>
    );
}
