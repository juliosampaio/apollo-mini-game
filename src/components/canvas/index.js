import React from "react";
import Tile from "../tile";
import styles from "./style.module.css";

const Canvas = ({ width, height }) => {
  const matrix = Array(width * height).fill(null);
  return (
    <div className={styles.canvas}>
      {matrix.map((_, idx) => (
        <Tile key={idx} />
      ))}
    </div>
  );
};

export default Canvas;
