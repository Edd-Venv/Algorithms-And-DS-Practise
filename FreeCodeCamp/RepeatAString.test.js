//IRRATIVE SOLUTION
function repeatStringNumTimes(str, num) {
  if (typeof str !== "string" || typeof num !== "number") return;
  if (num <= 0) return "";
  let repeatedString = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < str.length; j++) {
      repeatedString += str[j];
    }
  }
  return repeatedString;
  //TimeComplexity = O(n^2)
}

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
