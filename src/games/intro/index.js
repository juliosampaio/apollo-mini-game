import { Game } from "../game";
import { A, P, O, L } from "./letters";
class IntroGame extends Game {
  constructor() {
    super();
    this.updateIntervalInSeconds = 0.4;
    this.greeting = [A, P, O, L, L, O];
    this.greetingIndex = 0;
  }
  run() {
    super.run();
    if (this.shouldUpdate()) {
      if (this.greetingIndex >= this.greeting.length) {
        this.clearMatrix();
        this.pause();
        this.playSound();
        return;
      }
      this.clearMatrix();
      const letter = this.greeting[this.greetingIndex];
      letter.forEach(([x, y]) => this.printDot(x, y));
      this.greetingIndex++;
    }
  }

  playSound() {
    console.log("APOLLO");
  }
}

export const intro = new IntroGame();
