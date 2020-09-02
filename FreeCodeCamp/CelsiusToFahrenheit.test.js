function convertToF(number) {
  if (typeof number !== "number") return;
  return number * (9 / 5) + 32;
  //Time Complexity = O(log N);
}

describe.skip("FREE CODE CAMP", () => {
  it("SHOULD CONVERT CELIUS TO FAHRENHIET", () => {
    expect(convertToF(-30)).toBe(-22);
    expect(convertToF(-10)).toBe(14);
    expect(convertToF(0)).toBe(32);
    expect(convertToF(20)).toBe(68);
    expect(convertToF(30)).toBe(86);
  });
});
