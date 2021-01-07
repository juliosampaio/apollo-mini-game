class AudioPlayer {
  constructor(playerId) {
    this.audioPlayer = document.getElementById(playerId);
    this.isPlaying = false;
  }
  play(sound) {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.audioPlayer.src = sound;
    this.audioPlayer
      .play()
      .catch(console.log)
      .finally(() => (this.isPlaying = false));
  }
}

export class Game {
  constructor(matrix, previewMatrix) {
    this.matrix = matrix;
    this.previewMatrix = previewMatrix;
    this.frameId = 0;
    this.lastTime = 0;
    this.updateIntervalInSeconds = 0;
    this.startTime = 0;
    this.showSound = true;
    this.showScore = true;
    this.showStatus = true;
    this.isGameOver = false;
    this.audioPlayer = new AudioPlayer('audioPlayer');
    this.gameStatus = {};
  }
  start() {
    const now = Date.now();
    this.startTime = now;
    this.lastTime = now;
    this.frameId = requestAnimationFrame(this.run.bind(this));
    return this;
  }
  pause() {
    cancelAnimationFrame(this.frameId);
  }
  run() {
    this.frameId = requestAnimationFrame(this.run.bind(this));
  }
  quit() {
    cancelAnimationFrame(this.frameId);
  }
  shouldUpdate() {
    const timeElapsed = Math.abs((Date.now() - this.lastTime) / 1000);
    if (timeElapsed >= this.updateIntervalInSeconds) {
      this.lastTime = Date.now();
    }
    return timeElapsed >= this.updateIntervalInSeconds;
  }
  clearMatrix(matrix = this.matrix) {
    for (let rows = 0; rows < matrix.length; rows++) {
      for (let cols = 0; cols < matrix[0].length; cols++) {
        matrix[rows][cols] = 0;
      }
    }
  }
  clearPreviewMatrix() {
    this.clearMatrix(this.previewMatrix);
  }
  printDot(x, y, matrix) {
    if (!matrix) return;
    if (matrix[x] === undefined || matrix[x][y] === undefined) return;
    matrix[x][y] = { x, y };
    return { x, y };
  }

  clearDot(x, y, matrix) {
    if (!matrix) return;
    if (matrix[x] === undefined || matrix[x][y] === undefined) return;
    matrix[x][y] = 0;
  }

  getStatus() {
    this.gameStatus = {
      runningTime: this.startTime - Date.now(),
      speed: 0,
      level: 0,
      score: 0,
      ...this.gameStatus,
      isGameOver: this.isGameOver,
    };
    return this.gameStatus;
  }
  playSound(sound) {
    this.audioPlayer.play(sound);
  }
  onDown() {}
  onLeft() {}
  onRight() {}
  onUp() {}
  onReset() {}
  onStartPause() {}
  gameOver() {
    this.isGameOver = true;
  }
  printObject(startRow, startCol, shape = []) {
    let x = startRow;
    let y = startCol;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        const shouldPrint = shape[row][col] === 1;
        if (shouldPrint) {
          this.printDot(x, y, this.matrix);
        }
        y++;
      }
      x++;
      y = startCol;
    }
  }
}
