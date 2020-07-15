//Solution 1
/*function steps(number) {
  for (let i = 0; i < number; i++) {
    let stairs = "";
    for (let j = 0; j < number; j++) {
      if (j <= i) stairs += "#";
      else stairs += " ";
    }
    console.log(stairs);
  }
}*/

/*function printNumber(number, dec = 1) {
  if (number === 0) {
    return;
  }
  console.log(n);
  printNumber(n - dec);
}*/

//Solution 2
function steps(number, row = 0, stairs = "") {
  if (number === row) return;

  if (number === stairs.length) {
    console.log(stairs);
    steps(number, row + 1);
    return;
  }
  if (stairs.length <= row) stairs += "#";
  else stairs += " ";
  steps(number, row, stairs);
}

describe("SECTION ONE, STEPS", () => {
  it("SHOULD CONSOLE LOG A STEP SHAPE WITH N LEVELES", () => {
    steps(3);
  });
});
