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
    ]);
  });
});
