import React from 'react';
import cx from 'classnames';
import Canvas from '../canvas';
import styles from './style.module.css';
import { isOn } from '../../utils';

const SoundConfig = ({ active }) => {
  const classes = cx(styles.soundConfig, {
    [styles.on]: active,
    [styles.off]: !active,
  });
  return <div className={classes}>♫</div>;
};

const Score = ({ active }) => {
  const classes = cx(styles.score, {
    [styles.on]: active,
    [styles.off]: !active,
  });
  return <div className={classes}>10000</div>;
};

const Display = ({
  power,
  level,
  speed,
  sound,
  matrix,
  previewMatrix,
  gameStatus = {},
}) => {
  return (
    <div className={styles.display}>
      <div className={styles.left}>
        <div className={styles.scoreAndSound}>
          {isOn(power) && <SoundConfig active={isOn(sound)} />}
          {isOn(power) && <Score active={isOn(power)} />}
        </div>
        <div className={styles.canvas}>
          {isOn(power) && <Canvas matrix={matrix} />}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.preview}>
          {isOn(power) && <Canvas matrix={previewMatrix} />}
        </div>
        <div className={styles.preview}></div>
        <div className={styles.preview}></div>
        {isOn(power) && (
          <div className={styles.status}>
            <div>speed</div>
            <div>{gameStatus?.speed}</div>
            <span />
            <div>{gameStatus?.level}</div>
            <div>level</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
