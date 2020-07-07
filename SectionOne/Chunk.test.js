describe("SECTION ONE, CHUNCK", () => {
  it("SHOULD RETURN AN ARRAY OF ARRAYS", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual(
      expect.arrayContaining([[1, 2], [3, 4], [5]])
    );
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8],
      ])
    );
    expect(chunk([1, 2, 3, 4, 5], 4)).toEqual(
      expect.arrayContaining([[1, 2, 3, 4], [5]])
    );
  });
});
