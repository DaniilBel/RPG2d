import React, { useState } from "react";
import s from './Controls.module.css'
import player from '../../assets/player.png'
import arrow from '../../assets/arrow.png'

// Кнопка управления
const ControlButton = ({ label, rotate, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '10px',
                margin: '5px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: '#494949',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                backgroundImage: `url(${label === "E" ? null : arrow})`,
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                transform: `rotate(${rotate}deg)`
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ddd';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#494949';
            }}
        >
            {label}
        </button>
    );
};

const Controls = () => {

    const [position, setPosition] = useState({ x: 300, y: 150 });
    const shift = 25;

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
            <div className={s.movable} style={{
                width: '50px',
                height: '50px',
                left: position.x,
                top: position.y,
                backgroundImage: `url(${player})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>

            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '10px',
                    backgroundColor: '#292929',
                }}
            >
                <ControlButton rotate="270" onClick={moveUp} />

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <ControlButton rotate="180" onClick={moveLeft} />
                    <ControlButton label="E" rotate="0" />
                    <ControlButton rotate="0" onClick={moveRight} />
                </div>

                <ControlButton rotate="90" onClick={moveDown} />
            </div>

            {/* <div className={s.controls}>
                <button onClick={moveLeft}>Left</button>
                <button onClick={moveRight}>Right</button>
                <button onClick={moveUp}>Up</button>
                <button onClick={moveDown}>Down</button>
            </div> */}
        </div>
    );
}

export default Controls;