import React from 'react';
import s from './Window.module.css';

const Window = () => {
    const rows = 3;
    const cols = 3;

    const images = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            images.push(
                <img
                    key={`${i}-${j}`}
                    src="floor.png"
                    alt={`floor ${i}-${j}`}
                />
            );
        }
    }


    return (
        <div className={s.window_content}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gridGap: 0 }}>
                {/* <img src='floor.png' alt='' /> */}
                {images}
            </div>
        </div>
    );
}

export default Window;