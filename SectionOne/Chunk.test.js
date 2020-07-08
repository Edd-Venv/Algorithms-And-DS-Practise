function chunk(arr, size) {
  const chunk = [];
  let subArray = [];
  let count = 0;

  while (count < arr.length) {
    let j = 0;

    for (j; j < size; j++) {
      if (arr[count] != undefined) {
        subArray.push(arr[count]);
        count++;
      }
    }

    chunk.push(subArray);
    subArray = [];
    j = 0;
  }

  return chunk;
}

describe.skip("SECTION ONE, CHUNK", () => {
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
