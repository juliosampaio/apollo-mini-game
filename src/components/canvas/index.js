import React from "react";
import Tile from "../tile";
import styles from "./style.module.css";

const Canvas = ({ matrix = [] }) => {
  return (
    <div className={styles.canvas}>
      {matrix.flat().map((active, idx) => (
        <Tile key={idx} active={Boolean(active)} />
      ))}
    </div>
  );
};

export default Canvas;
