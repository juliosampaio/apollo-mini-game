import React from 'react';
import Tile from '../tile';
import styles from './style.module.css';

const Canvas = ({ matrix = [] }) => {
  const rows = new Array(matrix?.length).fill(0);
  const cols = new Array(matrix[0]?.length).fill(0);
  return (
    <div className={styles.canvas}>
      {rows.map((_, rowIndex) => (
        <div className={styles.canvasRow} key={rowIndex}>
          {cols.map((_, colIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              active={Boolean(matrix[rowIndex][colIndex])}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
