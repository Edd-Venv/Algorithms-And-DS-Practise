function capitalize(str) {
  let capitalizeString = "";
  capitalizeString += str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      capitalizeString += " ";
      capitalizeString += str[i + 1].toUpperCase();
      i++;
    } else capitalizeString += str[i];
  }

  return capitalizeString;
}

describe("SECTION ONE, CAPITALIZE", () => {
  it("SHOULD CAPITALIZE THE FIRST LETTER OF EACH WORD IN A STRING", () => {
    expect(capitalize("a short sentence")).toMatch("A Short Sentence");
    expect(capitalize("a lazy fox")).toMatch("A Lazy Fox");
    expect(capitalize("look, it is working!")).toMatch("Look, It Is Working!");
  });
});
