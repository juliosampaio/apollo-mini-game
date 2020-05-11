import React from "react";
import Canvas from "../canvas";
import styles from "./style.module.css";
const Display = ({ power, matrix, previewMatrix }) => (
  <div className={styles.display}>
    <div className={styles.left}>
      <div className={styles.score}></div>
      <div className={styles.canvas}>
        <Canvas matrix={matrix} />
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.preview}>
        <Canvas matrix={previewMatrix} />
      </div>
    </div>
  </div>
);

export default Display;
