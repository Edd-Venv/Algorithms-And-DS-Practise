/*function factorialize(number) {
    if (typeof number !== "number") return;
    let factorial = 1;

    if (number === 0) return factorial;

    for (let i = number; i > 0; i--) {
    factorial *= i;
    }
    return factorial;
    //Time Complexity = O(n);
}*/

function factorialize(number, prevNumber = 1) {
  if (typeof number !== "number") return;

  if (number === 0) return prevNumber;

  let factorial = number * prevNumber;

  return factorialize(number - 1, factorial);
}

describe.skip("FREECODECAMP", () => {
  it("SHOULD RETURN THE FACTORIAL OF A GIVEN NUMBER", () => {
    expect(factorialize(5)).toBe(120);
    expect(factorialize(10)).toBe(3628800);
    expect(factorialize(20)).toBe(2432902008176640000);
    expect(factorialize(0)).toBe(1);
  });
});
