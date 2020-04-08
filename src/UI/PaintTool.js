import React, { useState } from 'react';

export default function PaintControl(props) {
    return (
        <label>
            <input type="radio" name="painttools"/>
            <img src={props.src} alt={props.tool} />
        </label>
    );
}
