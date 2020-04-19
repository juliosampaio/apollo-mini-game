import React from "react";

import styles from "./style.module.css";

const Display = () => (
  <div className={styles.display}>
    <div className={styles.left}>
      <div className={styles.score}></div>
      <div className={styles.canvas}></div>
    </div>
    <div className={styles.right}></div>
  </div>
);

export default Display;
