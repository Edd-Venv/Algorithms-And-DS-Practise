function revrse(text) {
  if (typeof text !== "string") return "Not A String";
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
}

describe("SECTION ONE, REVERSE-STRING", () => {
  it("SHOULD RETURN A NEW STRING WITH THE REVERSED ORDER OF CHARACTERS", () => {
    expect(revrse(434)).toMatch("Not A String");
    expect(revrse("apple")).toMatch("elppa");
    expect(revrse("hello")).toMatch("olleh");
    expect(revrse("Greetings!")).toMatch("!sgniteerG");
  });
});
