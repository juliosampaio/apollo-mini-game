class AudioPlayer {
  constructor(playerId) {
    this.audioPlayer = document.getElementById(playerId);
    this.isPlaying = false;
  }
  play(sound) {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.audioPlayer.src = sound;
    this.audioPlayer.play().finally(() => (this.isPlaying = false));
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
    matrix[x][y] = 1;
  }
  getStatus() {
    return {
      runningTime: this.startTime - Date.now(),
      speed: 0,
      level: 0,
      score: 0,
      isGameOver: this.isGameOver,
    };
  }
  playSound(sound) {
    console.log('kkk');
    this.audioPlayer.play(sound);
  }
  onDown() {}
  onLeft() {}
  onRight() {}
  onUp() {}
  onReset() {}
  gameOver() {
    this.isGameOver = true;
  }
}
