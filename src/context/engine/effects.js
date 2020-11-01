import { useEffect } from 'react';
import { isOn } from '../../utils';
import { IntroGame } from '../../games';
import { useAnimationFrame } from '../../hooks';
import { ResetGame } from '../../games/reset';

export const useIntroGame = (state, actions) => {
  const { currentGame } = state;
  const { setCurrentGame } = actions;
  const isGameOver = currentGame?.isGameOver;
  useEffect(() => {
    if (currentGame?.isGameOver && currentGame instanceof ResetGame) {
      setCurrentGame(new IntroGame().start());
    }
  }, [isGameOver, currentGame, setCurrentGame]);
};

export const useGameStatus = ({ getGameStatus }) => {
  useAnimationFrame(() => {
    getGameStatus();
  });
};
