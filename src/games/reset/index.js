import { buildMatrix } from '../../utils';
import { Game } from '../game';

export class ResetGame extends Game {
  constructor() {
    super(buildMatrix(17, 10), buildMatrix(4, 4));
    this.start();
  }
  run() {
    super.run();
    this.clearMatrix();
    this.matrix.forEach((cols, line) => {
      cols.forEach((_, col) => this.printDot(line, col, this.matrix));
    });
    this.clearPreviewMatrix();
    this.previewMatrix.forEach((cols, line) => {
      cols.forEach((_, col) => this.printDot(line, col, this.previewMatrix));
    });
    this.updateIntervalInSeconds = 0.5;
    if (this.shouldUpdate()) {
      this.gameOver();
    }
  }
  getStatus() {
    const status = super.getStatus();
    return {
      ...status,
      speed: 8,
      level: 8,
      score: 18888,
    };
  }
}
