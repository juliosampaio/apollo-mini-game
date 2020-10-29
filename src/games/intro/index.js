import { Game } from '../game';
import { A, P, O, L, G, _0, _1 } from './letters';
import apolloGreeting from '../audio/apollo.mp3';
export class IntroGame extends Game {
  constructor(matrix) {
    super(matrix);
    this.updateIntervalInSeconds = 0.4;
    this.greeting = [A, P, O, L, L, O];
    this.greetingIndex = 0;
    this.showSound = false;
    this.showScore = false;
    this.showStatus = false;
    this.greetingShown = false;
  }

  showGreeting() {
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
    letter.forEach(([x, y]) => this.printDot(x, y));
    this.greetingIndex++;
  }

  showGameNumber() {
    if (!this.greetingShown) return;
    [G, _0, _1].map((l) => l.forEach(([x, y]) => this.printDot(x, y)));
  }

  run() {
    super.run();
    if (!this.shouldUpdate()) return;
    this.showGreeting();
    this.showGameNumber();
  }
}
