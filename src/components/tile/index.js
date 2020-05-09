import React from "react";
import cx from "classnames";
import styles from "./style.module.css";

const Tile = ({ active = false }) => {
  const classes = cx(styles.tile, {
    [styles.inactive]: !active,
  });
  return (
    <div className={classes}>
      <div className={styles.fill}></div>
    </div>
  );
};

export default Tile;
