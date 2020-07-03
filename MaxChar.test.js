describe("SECTION ONE, MAX-CHAR", () => {
  it("SHOULD RETURN THE CHARACTER THAT IS MOST COMMONLY USED IN THE STRING", () => {
    expect(maxChar("abccccccd")).toMatch("c");
    expect(maxChar("apple 1231111")).toMatch("1");
  });
});
