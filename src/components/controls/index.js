import React from 'react';
import { useEngineActions } from '../../hooks';
import Button from '../button';
import styles from './style.module.css';

const Controls = () => {
  const { togglePower, toggleSound } = useEngineActions();
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.row}>
        <Button size='m' labels={['left', 'height']} />
        <Button size='m' labels={['right', 'speed']} />
        <Button size='s' labels={['on/off']} onClick={togglePower} />
        <Button size='l' labels={['rotate', 'direction']} />
      </div>
      <div className={styles.row}>
        <Button size='m' labels={['down', 'mode']} />
        <Button size='s' labels={['mute']} onClick={toggleSound} />
      </div>
      <div className={styles.row}>
        <Button size='s' labels={['start/p']} />
        <Button size='s' labels={['reset']} />
      </div>
    </div>
  );
};

export default Controls;
