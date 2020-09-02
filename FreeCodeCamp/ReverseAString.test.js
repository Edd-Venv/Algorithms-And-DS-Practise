describe("FREECODECAMP", () => {
  it("SHOULD REVERSE A STRING", () => {
    expect(reverseString("hello")).toMatch("olleh");
    expect(reverseString("howdy")).toMatch("ydwoH");
    exepct(reverseString("Greetings from Earth")).toMatch(
      "htraE morf sgniteerG"
    );
  });
});
