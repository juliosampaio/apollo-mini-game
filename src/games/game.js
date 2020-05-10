import { buildMatrix } from "../utils";

class NotImplementedError extends Error {
  constructor(method) {
    super(`you must implement the method ${method.name}`);
  }
}

const throwNotImplemented = (method) => {
  throw new NotImplementedError(method);
};

export class Game {
  constructor(matrix) {
    this.matrix = matrix;
    this.frameId = 0;
    this.lastTime = 0;
    this.updateIntervalInSeconds = 0;
  }
  start() {
    this.lastTime = Date.now();
    this.frameId = requestAnimationFrame(this.run.bind(this));
  }
  pause() {
    cancelAnimationFrame(this.frameId);
  }
  run() {
    this.frameId = requestAnimationFrame(this.run.bind(this));
  }
  shouldUpdate() {
    const timeElapsed = Math.abs((Date.now() - this.lastTime) / 1000);
    if (timeElapsed >= this.updateIntervalInSeconds) {
      this.lastTime = Date.now();
    }
    return timeElapsed >= this.updateIntervalInSeconds;
  }
  clearMatrix() {
    for (let rows = 0; rows < this.matrix.length; rows++) {
      for (let cols = 0; cols < this.matrix[0].length; cols++) {
        this.matrix[rows][cols] = 0;
      }
    }
  }
  printDot(x, y) {
    this.matrix[x][y] = 1;
  }
}
