//solution 1
/*function vowels(str) {
  const caseInsensitiveString = str.toLowerCase();

  let count = 0;
  const vowelsArray = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < caseInsensitiveString.length; i++) {
    let char = caseInsensitiveString[i];
    if (vowelsArray.includes(char)) {
      count++;
    }
  }
  return count;
}*/

//solution 2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

describe("SECTION TWO", () => {
  it("SHOULD RETURN THE TOTAL NUMBER OF TIMES VOWELS APPEAR IN A SENTENCE", () => {
    expect(vowels("Hi There!")).toBe(3);
    expect(vowels("Why do you ask?")).toBe(4);
    expect(vowels("Why?")).toBe(0);
  });
});
