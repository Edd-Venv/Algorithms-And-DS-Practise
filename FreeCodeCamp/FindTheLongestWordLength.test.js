function findLongestWordLength(str) {
  if (typeof str !== "string") return;
  let length = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === " ") {
      //console.log(count, length, str[i]);
      if (count > length) {
        length = count;
      }

      count = 0;
      console.log(count, length, str[i]);
    }
    //console.log(count, length, str[i]);
    count++;
  }
  return length;
}

describe("FREECODECAMP", () => {
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
