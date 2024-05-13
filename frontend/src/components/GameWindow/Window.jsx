import React from 'react';
import s from './Window.module.css';
import bush from '../../assets/bush.png'
import grass from '../../assets/grass.png'

const mapLayout = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '#', '.', '.', '.', '#', '#'],
    ['#', '.', '.', '.', '#', '.', '.', '.', '.', '#'],
    ['#', '#', ',', '#', '#', '.', '.', '.', '.', '.'],
    ['#', '#', '.', '#', '#', '.', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ];

const Window = () => {
    return (
        <div>
          {mapLayout.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  style={{
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    lineHeight: '20px',
                    border: '1px solid black',
                    backgroundImage: `url(${cell === '#' ? bush : grass})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      );
}

export default Window;