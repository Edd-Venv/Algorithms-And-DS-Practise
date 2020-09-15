//RECURSIVE SOLUTION
function findLongestWordLength(
  str,
  currentPostion = 0,
  previousWord = 0,
  word = ""
) {
  if (typeof str !== "string") return;

  let previousWordLength = previousWord;
  let currentStringPostion = currentPostion;

  if (currentPostion > str.length) return previousWordLength;

  if (str[currentPostion] === " " || currentPostion === str.length) {
    if (previousWordLength < word.length) previousWordLength = word.length;

    return findLongestWordLength(
      str,
      currentStringPostion + 1,
      previousWordLength
    );
  }
  word += str[currentPostion];

  return findLongestWordLength(
    str,
    currentStringPostion + 1,
    previousWordLength,
    word
  );
}

/*
//IRRETIVE SOLUTION
function findLongestWordLength(str) {
  if (typeof str !== "string") return;

  const words = [];
  let word = "";
  let wordLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") word += str[i];

    if (str[i] == " ") {
      words.push(word);
      word = "";
    }
  }
  words.push(word);

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > wordLength) wordLength = words[i].length;
  }

  return wordLength;
  //Time Complexity O(n);
}*/

describe.skip("FREECODECAMP", () => {
  it("SHOULD RETURN THE LENGTH OF THE LONGEST WORD IN A STRING", () => {
    expect(
      findLongestWordLength("The quick brown fox jumped over the lazy dog")
    ).toBe(6);
    expect(findLongestWordLength("May the force be with you")).toBe(5);
    expect(findLongestWordLength("Google do a barrel roll")).toBe(6);
    expect(
      findLongestWordLength(
        "What is the average airspeed velocity of an unladen swallow"
      )
    ).toBe(8);
    expect(
      findLongestWordLength(
        "What if we try a super-long word such as otorhinolaryngology"
      )
    ).toBe(19);
  });
});
