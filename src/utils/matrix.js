export const buildMatrix = (rows, cols, fillWith = 0) => {
  const matrix = new Array(rows).fill(0);
  matrix.forEach((_, i) => (matrix[i] = new Array(cols).fill(fillWith)));
  return matrix;
};
