import { Game } from '../game';
import { A, P, O, L, G, _0, _1, _2 } from './letters';
import apolloGreeting from '../audio/apollo.mp3';
import beep from '../audio/beep.mp3';
import { buildMatrix } from '../../utils';
import { CarRacing } from '../car-raging';

const TITLES = [
  [[G, _0, _1], CarRacing],
  [[G, _0, _2], undefined],
];

export class IntroGame extends Game {
  constructor() {
    super(buildMatrix(17, 10));
    this.updateIntervalInSeconds = 0.4;
    this.greeting = [A, P, O, L, L, O];
    this.greetingIndex = 0;
    this.showSound = false;
    this.showScore = false;
    this.showStatus = false;
    this.greetingShown = false;
    this.games = TITLES;
    this.selectedGameIndex = 0;
    this.currentGame = undefined;
  }

  showGreeting() {
    if (!this.shouldUpdate()) return;
    if (this.greetingShown) return;
    if (this.greetingIndex >= this.greeting.length) {
      this.clearMatrix();
      this.pause();
      this.playSound(apolloGreeting);
      setTimeout(() => {
        this.showSound = true;
        this.showScore = true;
        this.showStatus = true;
        this.greetingShown = true;
        this.start();
      }, 500);
      return;
    }
    this.clearMatrix();
    const letter = this.greeting[this.greetingIndex];
    letter.forEach(([x, y]) => this.printDot(x, y, this.matrix));
    this.greetingIndex++;
  }

  showGameNumber() {
    if (!this.greetingShown) return;
    const [gameNumber] = this.games[this.selectedGameIndex];
    gameNumber.map((l) =>
      l.forEach(([x, y]) => this.printDot(x, y, this.matrix))
    );
  }

  run() {
    super.run();
    this.showGreeting();
    this.showGameNumber();
  }
  onDown() {
    this.clearMatrix();
    if (this.selectedGameIndex + 1 < this.games.length) {
      this.selectedGameIndex++;
    } else {
      this.selectedGameIndex = 0;
    }
    this.playSound(beep);
  }
  onUp() {
    this.clearMatrix();
    if (this.selectedGameIndex - 1 >= 0) {
      this.selectedGameIndex--;
    } else {
      this.selectedGameIndex = this.games.length - 1;
    }
    this.playSound(beep);
  }
  startSelectedGame() {
    if (!this.greetingShown) return;
    if (!this.currentGame) {
      const [, SelectedGame] = this.games[this.selectedGameIndex];
      this.currentGame = new SelectedGame().start();
    }
    return this.currentGame;
  }
}
