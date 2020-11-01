import React from 'react';
import { useEngineActions, useEngine } from '../../hooks';
import Button from '../button';
import styles from './style.module.css';

const Controls = () => {
  const [
    { currentGame },
    { togglePower, toggleSound, resetConsole },
  ] = useEngine();
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.row}>
        <Button size='m' labels={['left', 'height']} />
        <Button size='m' labels={['right', 'speed']} />
        <Button size='s' labels={['on/off']} onClick={togglePower} />
        <Button
          size='l'
          labels={['rotate', 'direction']}
          onClick={() => currentGame.onUp()}
        />
      </div>
      <div className={styles.row}>
        <Button
          size='m'
          labels={['down', 'mode']}
          onClick={() => currentGame.onDown()}
        />
        <Button size='s' labels={['mute']} onClick={toggleSound} />
      </div>
      <div className={styles.row}>
        <Button size='s' labels={['start/p']} />
        <Button size='s' labels={['reset']} onClick={resetConsole} />
      </div>
    </div>
  );
};

export default Controls;
