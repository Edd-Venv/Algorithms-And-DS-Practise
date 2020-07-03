function maxChar(string) {
  const hashMap = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    hashMap[char] = hashMap[char] + 1 || 1;
    if (hashMap[char] > maxCount) {
      maxChar = char;
      maxCount = hashMap[char];
    }
  }

  return maxChar;
}

describe("SECTION ONE, MAX-CHAR", () => {
  it("SHOULD RETURN THE CHARACTER THAT IS MOST COMMONLY USED IN THE STRING", () => {
    expect(maxChar("abccccccd")).toMatch("c");
    expect(maxChar("apple 1231111")).toMatch("1");
  });
});
