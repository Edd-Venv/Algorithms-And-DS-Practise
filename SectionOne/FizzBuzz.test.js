function fizzBuzz(number) {
  if (typeof number !== "number") return "Please Enter A Valid Number";
  if (number < 1 || number > 100) return "Number below or beyond limit";
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number;
}

describe.skip("SECTION ONE, FIZZBUZZ", () => {
  it("SHOULD PRINT THE NUMBERS 1 TO 100, BUT FOR MULTIPLES OF THREE FIZZ INSTEAD OF THE NUMBER AND FOR MULTIPLES OF FIVE PRINT BUZZ, AND FOR BOTH PRINT FIZZBUZZ", () => {
    expect(fizzBuzz("NAN")).toMatch("Please Enter A Valid Number");
    expect(fizzBuzz(-1) || fizzBuzz(101)).toMatch(
      "Number below or beyond limit"
    );
    expect(fizzBuzz(3)).toMatch("Fizz");
    expect(fizzBuzz(5)).toMatch("Buzz");
    expect(fizzBuzz(15)).toMatch("FizzBuzz");
  });
});
