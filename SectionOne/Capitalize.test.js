describe("SECTION ONE, CAPITALIZE", () => {
  it("SHOULD CAPITALIZE THE FIRST LETTER OF EACH WORD IN A STRING", () => {
    expect(capitalize("a sort sentence")).toMatch("A Short Sentence");
    expect(capitalize("a lazy fox")).toMatch("A Lazy Fox");
    expect(capitalize("look, it is working!")).toMatch("Look, It Is Working!");
  });
});
