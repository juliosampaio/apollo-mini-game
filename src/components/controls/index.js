import React from 'react';
import { CarRacing } from '../../games/car-raging';
import { useEngineActions, useEngine } from '../../hooks';
import Button from '../button';
import styles from './style.module.css';

const Controls = () => {
  const [
    { currentGame },
    { togglePower, toggleSound, resetConsole, setCurrentGame },
  ] = useEngine();

  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.row}>
        <Button
          size='m'
          labels={['left', 'height']}
          onClick={() => currentGame.onLeft()}
        />
        <Button
          size='m'
          labels={['right', 'speed']}
          onClick={() => currentGame.onRight()}
        />
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
        <Button
          size='s'
          labels={['start/p']}
          onClick={() => setCurrentGame(new CarRacing().start())}
        />
        <Button size='s' labels={['reset']} onClick={resetConsole} />
      </div>
    </div>
  );
};

export default Controls;
