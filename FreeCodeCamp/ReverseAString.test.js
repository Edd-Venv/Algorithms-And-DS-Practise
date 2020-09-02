function reverseString(str) {
  if (typeof str !== "string") return;
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
  //Time Complexity = O(n);
}

describe.skip("FREECODECAMP", () => {
  it("SHOULD REVERSE A STRING", () => {
    expect(reverseString("hello")).toMatch("olleh");
    expect(reverseString("Howdy")).toMatch("ydwoH");
    expect(reverseString("Greetings from Earth")).toMatch(
      "htraE morf sgniteerG"
    );
  });
});
