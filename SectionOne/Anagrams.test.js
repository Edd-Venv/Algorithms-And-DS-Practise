describe("SECTION ONE, ANAGRAMS", () => {
  it("SHOULD RETURN TRUE IF TWO STRINGS ARE ANAGRAMS OF EACHOTHER AND FALSE IF NOT", () => {
    expect(anagram("rail safety", "fairy tales")).toBeTruthy();
    expect(anagram("RAIL SAFTEY!", "fairy tales")).toBeTruthy();
    expect(anagram("Hi there", "Bye there")).toBeFalsy();
  });
});
