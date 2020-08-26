/*
// Recursive Solution
function slowFibonacci(number) {
  if (number < 2) return number;
  else return fibonacci(number - 1) + fibonacci(number - 2);
  //Time Complexity = O(n^2)
  //Time Complexity = o(n) with memoization
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}
const fibonacci = memoize(slowFibonacci);

*/

function fibonacci(number) {
  if (number < 0) return;

  const series = [0, 1, 1];

  for (let i = 0; i < number; i++) {
    series.push(series[i + 1] + series[i + 2]);
  }

  return series[number];
  //Time Complexcity O(n)
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
