describe("SECTION TWO", () => {
  it("SHOULD RETURN THE TOTAL NUMBER OF TIMES VOWELS APPEAR IN A SENTENCE", () => {
    expect(vowels("Hi There!")).toBe(3);
    expect(vowels("Why do you ask?")).toBe(4);
    expect(vowels("Why?")).toBe(0);
  });
});
