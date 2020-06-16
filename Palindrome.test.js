describe("SECTION ONE, PALINDROME", () => {
  it("SHOULD RETURN TRUE IF A STRING IS THE SAME WHEN REVERSED", () => {
    expect(palindrome(434)).toBeFalsy();
    expect(palindrome("abba")).toBeTruthy();
    expect(palindrome("abcdefg")).toBeFalsy();
  });
});
