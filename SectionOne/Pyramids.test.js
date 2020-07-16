//Solution 1
/*function pyramid(number) {
  const midPoint = Math.floor((2 * number - 1) / 2);
  for (let row = 0; row < number; row++) {
    let level = "";

    for (let column = 0; column < 2 * number - 1; column++) {
      if (midPoint - row <= column && midPoint + row >= column) level += "#";
      else level += " ";
    }
    console.log(level);
  }
}*/

//Solution 2
function pyramid(number, row = 0, level = " ") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midPoint - row <= level.length && midPoint + row >= level.length)
    add = "#";
  else add = " ";

  pyramid(n, row, level + add);
}

describe("SECTION TWO", () => {
  it("SHOULD CREATE AND RETRUN A PYRAMID", () => {
    pyramid(3);
  });
});
