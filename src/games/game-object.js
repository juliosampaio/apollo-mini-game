export class GameObject {
  constructor(game, shape) {
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
}
