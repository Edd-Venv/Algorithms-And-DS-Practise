describe("SECTION ONE, FIZZBUZZ", () => {
  it("SHOULD PRINT THE NUMBERS 1 TO 100, BUT FOR MULTIPLES OF THREE FIZZ INSTEAD OF THE NUMBER AND FOR MULTIPLES OF FIVE PRINT BUZZ, AND FOR BOTH PRINT FIZZBUZZ", () => {
    expect(fizzBuzz(3)).toMatch("Fizz");
    expect(fizzBuzz(5)).toMatch("Buzz");
    expect(fizzBuzz(15)).toMatch("FizzBuzz");
  });
});
