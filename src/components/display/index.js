import React from "react";
import Canvas from "../canvas";
import styles from "./style.module.css";

const Display = ({ power, matrix, previewMatrix, gameStatus = {} }) => {
  const isOn = (power) => power === "on";
  return (
    <div className={styles.display}>
      <div className={styles.left}>
        <div className={styles.score}>{gameStatus && gameStatus.score}</div>
        <div className={styles.canvas}>
          {isOn(power) && <Canvas matrix={matrix} />}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.preview}>
          {isOn(power) && <Canvas matrix={previewMatrix} />}
        </div>
      </div>
    </div>
  );
};

export default Display;
