import React, { useState } from "react";
import s from './Controls.module.css'

const Controls = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const shift = 10;

    const moveLeft = () => {
        setPosition(prevPosition => ({
            ...prevPosition,
            x: prevPosition.x - shift
        }));
    };

    const moveRight = () => {
        setPosition(prevPosition => ({
            ...prevPosition,
            x: prevPosition.x + shift
        }));
    };

    const moveUp = () => {
        setPosition(prevPosition => ({
            ...prevPosition,
            y: prevPosition.y - shift
        }));
    };

    const moveDown = () => {
        setPosition(prevPosition => ({
            ...prevPosition,
            y: prevPosition.y + shift
        }));
        console.log(position.x, position.y);
    };

    return (
        <div className={s.controls_container}>
            <div className={s.movable} style={{ left: position.x, top: position.y }}>
                <img src="player.png" alt="Placeholder" />
            </div>

            <div className={s.controls}>
                <button onClick={moveLeft}>Left</button>
                <button onClick={moveRight}>Right</button>
                <button onClick={moveUp}>Up</button>
                <button onClick={moveDown}>Down</button>
            </div>
        </div>
    );
}

export default Controls;