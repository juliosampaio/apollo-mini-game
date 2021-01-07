import { Game } from '../game';
import { buildMatrix } from '../../utils';
import { Car, HorizontalWall, Wall } from './objects';

export class CarRacing extends Game {
  constructor() {
    super(buildMatrix(17, 10), buildMatrix(4, 4));
    this.leftWallStart = -2;
    this.car = new Car(10, 5, this);
    this.finishLine = new HorizontalWall(8, 1, this);
    this.walls = [
      [
        new Wall(-2, 0, this),
        new Wall(3, 0, this),
        new Wall(8, 0, this),
        new Wall(13, 0, this),
      ],
      [
        new Wall(-2, 9, this),
        new Wall(3, 9, this),
        new Wall(8, 9, this),
        new Wall(13, 9, this),
      ],
    ];
    this.updateIntervalInSeconds = 0.5;
  }

  run() {
    super.run();
    this.paintPreview();
    this.paintWalls();
    this.paintCar();
    this.printFinishLine();
  }

  paintPreview() {
    this.clearPreviewMatrix();
    this.previewMatrix.forEach((cols, line) => {
      cols.forEach((_, col) => this.printDot(line, col, this.previewMatrix));
    });
  }
  paintWalls() {
    if (!this.shouldUpdate()) return;
    this.walls.flatMap((w) => w).forEach((wall) => wall.paint());
  }
  paintCar() {
    this.car.paint();
    if (this.car.isColliding(this.walls[0][0])) {
      this.pause();
    }
  }
  printFinishLine() {
    this.finishLine.paint();
  }
  getStatus() {
    const status = super.getStatus();
    status.score += 1;
    return status;
  }
  onLeft() {
    this.car.left();
  }
  onRight() {
    this.car.right();
  }
}
