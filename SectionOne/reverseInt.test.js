//min 1hr
const reverseNegativeNumber = (number) => {
  const stringVersionOfNumber = `${number}`;
  let stringVersionOfReversedNumber = "-";

  for (let i = stringVersionOfNumber.length - 1; i > 0; i--) {
    stringVersionOfReversedNumber += stringVersionOfNumber[i];
  }

  return +stringVersionOfReversedNumber;
};

const reversePositiveNumber = (number) => {
  const stringVersionOfNumber = `${number}`;
  let stringVersionOfReversedNumber = "";

  for (let i = stringVersionOfNumber.length - 1; i >= 0; i--) {
    stringVersionOfReversedNumber += stringVersionOfNumber[i];
  }

  return +stringVersionOfReversedNumber;
};

function reverseInt(number) {
  if (typeof number === "number") {
    const stringVersionOfNumber = `${number}`;

    if (stringVersionOfNumber.includes("-"))
      return reverseNegativeNumber(number);
    else return reversePositiveNumber(number);
  }

  return "NaN";
}

describe("SECTION ONE, REVERSE-INTERGER", () => {
  it("SHOULD REVERSE THE ORDERING OF NUMBERS", () => {
    expect(reverseInt(15)).toBe(51);
    expect(reverseInt(981)).toBe(189);
    expect(reverseInt(500)).toBe(5);
    expect(reverseInt(-15)).toBe(-51);
    expect(reverseInt(-90)).toBe(-9);
    expect(reverseInt("gsgf")).toMatch("NaN");
  });
});
