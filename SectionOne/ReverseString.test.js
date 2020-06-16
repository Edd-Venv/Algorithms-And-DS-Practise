function revrse() {}

describe("SECTION ONE, REVERSE-STRING", () => {
  it("SHOULD RETURN A NEW STRING WITH THE REVERSED ORDER OF CHARACTERS", () => {
    expect(revrse("apple").toMatch("leppa"));
    expect(revrse("hello").toMatch("olleh"));
    expect(revrse("Greetings!").toMatch("!sgniteerG"));
  });
});
