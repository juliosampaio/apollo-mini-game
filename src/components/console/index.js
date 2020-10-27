import React from 'react';
import styles from './style.module.css';
import Display from '../display';

import Controls from '../controls';
import { Engine } from '../../context';

const Console = () => {
  return (
    <Engine.Provider>
      <div className={styles.console}>
        <audio id='audioPlayer' />
        <div className={styles.displayContainer}>
          <Display />
        </div>
        <div className={styles.division} />
        <Controls />
        <div className={styles.label}>
          <img alt='apollo logo' src='./apollo.png' />
        </div>
        <div className={styles.stripe}>
          <img alt='apollo logo white' src='./apollo-white.png' />
        </div>
      </div>
    </Engine.Provider>
  );
};

export default Console;
