const revrse = (str) => {
  let reveredString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reveredString += str[i];
  }
  return reveredString;
};

function palindrome(str) {
  const reversedString = revrse(str);
  return str === reversedString;
}

describe("SECTION ONE, PALINDROME", () => {
  it("SHOULD RETURN TRUE IF A STRING IS THE SAME WHEN REVERSED", () => {
    expect(palindrome(434)).toBeFalsy();
    expect(palindrome("abba")).toBeTruthy();
    expect(palindrome("abcdefg")).toBeFalsy();
  });
});
