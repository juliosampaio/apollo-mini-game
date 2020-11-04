import { GameObject } from '../game-object';

const CAR = [
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
  [1, 0, 1],
];

export class Car extends GameObject {
  constructor(x, y, game) {
    super(game, CAR);
    this.x = x;
    this.y = y;
  }
  paint() {
    super.paint(this.x, this.y);
  }
  left() {
    this.clearPaintedRegion();
    this.y--;
  }
  down() {
    this.clearPaintedRegion();
    this.x++;
  }
  up() {
    this.clearPaintedRegion();
    this.x--;
  }
  right() {
    this.clearPaintedRegion();
    this.y++;
  }
}

export class Wall extends GameObject {
  constructor(x, y, game) {
    super(game, [[1], [1], [1]]);
    this.x = x;
    this.y = y;
  }
  paint() {
    this.clearPaintedRegion();
    super.paint(this.x, this.y);
    this.x++;
    if (this.x > this.game.matrix.length - 1) this.x = -2;
  }
}
