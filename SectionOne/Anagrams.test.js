const createStringHashMap = (string) => {
  const hashMap = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    hashMap[char] = hashMap[char] + 1 || 1;
  }

  return hashMap;
};

function anagram(stringA, stringB) {
  const firstString = stringA.replace(/[^\w]/g, "");
  const secondString = stringB.replace(/[^\w]/g, "");

  if (firstString.length !== secondString.length) return false;

  const firstStringHashMap = createStringHashMap(firstString);
  const secondStringHashMap = createStringHashMap(secondString);
  let count = 0;

  for (let i = 0; i < firstString.length; i++) {
    const char = firstString[i].toLowerCase();

    if (firstStringHashMap[char] === secondStringHashMap[char]) {
      count++;
    }
  }

  return firstString.length === count;
}

describe.skip("SECTION ONE, ANAGRAMS", () => {
  it("SHOULD RETURN TRUE IF TWO STRINGS ARE ANAGRAMS OF EACHOTHER AND FALSE IF NOT", () => {
    expect(anagram("rail safety", "fairy tales")).toBeTruthy();
    expect(anagram("RAIL SAFTEY!", "fairy tales")).toBeTruthy();
    expect(anagram("Hi there", "Bye there")).toBeFalsy();
  });
});
