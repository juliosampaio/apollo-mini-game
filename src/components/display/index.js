import React from 'react';
import cx from 'classnames';
import Canvas from '../canvas';
import styles from './style.module.css';
import { isOn } from '../../utils';
import { useEngineState } from '../../hooks';

const SoundConfig = () => {
  const { sound, power, currentGame } = useEngineState();
  const classes = cx(styles.soundConfig, {
    [styles.on]: isOn(sound),
    [styles.off]: !isOn(sound),
  });
  return (
    isOn(power) && (
      <div className={classes}>{currentGame?.showSound && '♫'}</div>
    )
  );
};

const Score = ({ active }) => {
  const { power, currentGame } = useEngineState();
  const classes = cx(styles.score, {
    [styles.on]: active,
    [styles.off]: !active,
  });
  return (
    isOn(power) && (
      <div className={classes}>
        {currentGame?.showScore &&
          `${currentGame?.getStatus()?.score || 0}`.padStart(4, 0)}
      </div>
    )
  );
};

const Display = () => {
  const { power, sound, gameStatus, currentGame } = useEngineState();
  return (
    <div className={styles.display}>
      <div className={styles.left}>
        <div className={styles.scoreAndSound}>
          <SoundConfig active={isOn(sound)} />
          {isOn(power) && <Score active={isOn(power)} />}
        </div>
        <div className={styles.canvas}>
          {isOn(power) && <Canvas matrix={currentGame?.matrix} />}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.preview}>
          {isOn(power) && <Canvas matrix={currentGame?.previewMatrix} />}
        </div>
        <div className={styles.preview}></div>
        <div className={styles.preview}></div>
        {isOn(power) && currentGame?.showStatus && (
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
