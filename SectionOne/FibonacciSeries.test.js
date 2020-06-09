function fibonacci(number) {
  if (number < 2) return number;
  else return fibonacci(number - 1) + fibonacci(number - 2);
}

describe("SECTION ONE, FIBONACCI SERIES", () => {
  it("SHOULD RETRUN THE N-TH ENTRY IN THE FIBONACCI SERIES ALSO SOLVED USING RECURSION", () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
  });
});
