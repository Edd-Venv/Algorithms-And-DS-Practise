function matrixFun(number) {
  const results = [];

  for (let i = 0; i < number; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = number - 1;
  let startRow = 0;
  let endRow = number - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    //Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //Start Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

describe("SECTION TWO, ", () => {
  it("SHOULD RETURN AN NXN SPIRAL MATRIX", () => {
    expect(matrixFun(2)).toEqual([
      [1, 2],
      [4, 3],
    ]);
    expect(matrixFun(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
    expect(matrixFun(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]);
  });
});
