describe("SECTION ONE, CHUNCK", () => {
  it("SHOULD RETURN AN ARRAY OF ARRAYS", () => {
    expect(chunk([1, 2, 3, 4, 5])).toEqual(expect.any([[1, 2], [3, 4], [5]]));
  });
});
