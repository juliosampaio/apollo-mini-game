import React, { useEffect } from 'react';
import { IntroGame } from '../../games';
import { useEngine } from '../../hooks';
import Button from '../button';
import styles from './style.module.css';

const Controls = () => {
  const [
    { currentGame },
    { togglePower, toggleSound, resetConsole, setCurrentGame },
  ] = useEngine();

  useEffect(() => {
    function onEnter(e) {
      switch (e.keyCode) {
        case 37:
        case 65: {
          currentGame?.onLeft();
          break;
        }
        case 39:
        case 68: {
          currentGame?.onRight();
          break;
        }
        default: {
        }
      }
    }
    document.addEventListener('keydown', onEnter);
    return function () {
      document.removeEventListener('keydown', onEnter);
    };
  }, [currentGame]);

  const onStartPause = () => {
    if (currentGame instanceof IntroGame) {
      const selectedGame = currentGame.startSelectedGame();
      if (selectedGame) setCurrentGame(selectedGame);
    }
  };

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
        <Button size='s' labels={['start/p']} onClick={onStartPause} />
        <Button size='s' labels={['reset']} onClick={resetConsole} />
      </div>
    </div>
  );
};

export default Controls;
