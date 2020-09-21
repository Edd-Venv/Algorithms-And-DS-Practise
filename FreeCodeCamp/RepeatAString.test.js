describe("FREECODECAMP", () => {
  it("SHOULD RETURN AN Nth REPEATED STRING", () => {
    expect(repeatStringNumTimes("abc", 3)).toMatch("abcabcabc");
    expect(repeatStringNumTimes("abc", 4)).toMatch("abcabcabcabc");
    expect(repeatStringNumTimes("abc", 1)).toMatch("abc");
    expect(repeatStringNumTimes("*", 8)).toMatch("********");
    expect(repeatStringNumTimes("abc", 1)).toMatch("abc");
    expect(repeatStringNumTimes("abc", -2)).toMatch("");
    expect(repeatStringNumTimes("abc", 0)).toMatch("");
  });
});
