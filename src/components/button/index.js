import React from "react";
import styles from "./style.module.css";
import cx from "classnames";

const sizeClasses = {
  s: styles.small,
  m: styles.medium,
  l: styles.large,
};
const Button = ({ size, labels = [], onClick }) => {
  const sizeClass = sizeClasses[size];
  const classes = cx(styles.button, sizeClass);
  return (
    <div className={styles.buttonContent}>
      <button onClick={onClick} className={classes}></button>
      <div className={styles.labelsWrapper}>
        {labels.map((label, idx) => (
          <span key={idx}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default Button;
