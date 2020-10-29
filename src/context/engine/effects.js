import { useEffect, useRef, useState } from 'react';
import { isOn } from '../../utils';
import { IntroGame } from '../../games';
import { useAnimationFrame } from '../../hooks';

export const useIntroGame = (state, actions) => {
  const { power, matrix } = state;
  const { setCurrentGame } = actions;
  const action = useRef({ setCurrentGame });
  const game = useRef(new IntroGame(matrix));
  useEffect(() => {
    if (isOn(power)) {
      game.current.start();
      action.current.setCurrentGame(game.current);
    }
  }, [power]);
};

export const useGameStatus = ({ getGameStatus }) => {
  useAnimationFrame(() => {
    getGameStatus();
  });
};
