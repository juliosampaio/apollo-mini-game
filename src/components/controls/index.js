import React from 'react';
import Button from '../button';
import styles from './style.module.css';

const Controls = () => (
  <div className={styles.buttonsContainer}>
    <div className={styles.row}>
      <Button size='m' labels={['left', 'height']} />
      <Button size='m' labels={['right', 'speed']} />
      <Button size='s' labels={['on/off']} />
      <Button size='l' labels={['rotate', 'direction']} />
    </div>
    <div className={styles.row}>
      <Button size='m' labels={['down', 'mode']} />
      <Button size='s' labels={['mute']} />
    </div>
    <div className={styles.row}>
      <Button size='s' labels={['start/p']} />
      <Button size='s' labels={['reset']} />
    </div>
  </div>
);

export default Controls;
