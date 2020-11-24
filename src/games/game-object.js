export class GameObject {
  constructor(game, shape) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.shape = shape;
    this.paintedRegion = new Set();
  }

  clearPaintedRegion() {
    Array.from(this.paintedRegion)
      .map((coord) => coord.split(','))
      .forEach(([x, y]) => this.game.clearDot(x, y, this.game.matrix));
    this.paintedRegion = new Set();
  }
  paint(startRow, startCol) {
    let x = startRow;
    let y = startCol;
    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        const shouldPrint = this.shape[row][col] === 1;
        if (shouldPrint) {
          this.game.printDot(x, y, this.game.matrix);
          this.paintedRegion.add(`${x},${y}`);
        }
        y++;
      }
      x++;
      y = startCol;
    }
  }

  isColliding(anotherOject) {
    const it = this.getCoordinates();
    const that = anotherOject.getCoordinates();
    if (
      it.x < that.x + that.width &&
      it.x + it.width > that.x &&
      it.y < that.y + that.height &&
      it.y + it.height > that.y
    ) {
      return true;
    }
    return false;
  }

  getCoordinates() {
    const { x, y } = this;
    const width = this.shape.length;
    const height = this.shape[0].length;
    return { x, y, width, height };
  }
}
