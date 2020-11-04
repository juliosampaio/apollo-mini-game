import { Game } from '../game';
import { buildMatrix } from '../../utils';
import { Car, Wall } from './objects';

export class CarRacing extends Game {
  constructor() {
    super(buildMatrix(17, 10), buildMatrix(4, 4));
    this.leftWallStart = -2;
    this.car = new Car(10, 5, this);
    console.log(this.car);
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
  }
  getStatus() {
    const status = super.getStatus();
    status.score += 1;
    return status;
  }
}
