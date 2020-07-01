describe("SECTION ONE, REVERSE-INTERGER", () => {
  it("SHOULD REVERSE THE ORDERING OF NUMBERS", () => {
    expect(reverseInt(15)).toBe(51);
    expect(reverseInt(981)).toBe(189);
    expect(reverseInt(500)).toBe(500);
    expect(reverseInt(-15)).toBe(-51);
    expect(reverseInt(-90)).toBe(-9);
  });
});
