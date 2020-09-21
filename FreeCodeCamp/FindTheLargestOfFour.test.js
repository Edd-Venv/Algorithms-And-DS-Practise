//IRRATIVE SOLUTION
function largestOfFour(arr) {
  if (typeof arr !== "object") return;
  const resultantArray = [];
  let largestNumber = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (largestNumber !== 0) resultantArray.push(largestNumber);
    largestNumber = 0;

    if (arr[i] !== undefined)
      for (let j = 0; j < arr[i].length; j++) {
        if (Math.sign(arr[i][j]) === -1) {
          if (j === 0) largestNumber = -1000;

          if (largestNumber < arr[i][j]) largestNumber = arr[i][j];
        }

        if (Math.sign(arr[i][j]) !== -1) {
          if (largestNumber < arr[i][j]) largestNumber = arr[i][j];
        }
      }
  }

  return resultantArray;
}

/*//RECURSIVE SOLUTION
function largestOfFour(
  arr,
  arrayIndex = 0,
  subArrayIndexCount = 0,
  largestNumber = 0,
  resultantArray = []
) {
  if (typeof arr !== "object") return;
  const arrayLength = arr.length;

  //Return Final Array
  if (arrayIndex === arrayLength) return resultantArray;

  let subArrayLength = arr[arrayIndex].length;
  let subArrayIndex = arr[arrayIndex][subArrayIndexCount];

  //Move Through Current SubArray
  if (subArrayIndexCount < subArrayLength) {
    if (largestNumber < subArrayIndex) {
      largestNumber = subArrayIndex;
    }
    largestOfFour(
      arr,
      arrayIndex,
      subArrayIndexCount + 1,
      largestNumber,
      resultantArray
    );
  }
  //Move To Next SubArray
  if (subArrayIndexCount === subArrayLength) {
    if (largestNumber < subArrayIndex) {
      largestNumber = subArrayIndex;
    }
    resultantArray.push(largestNumber);
    largestOfFour(
      arr,
      arrayIndex + 1,
      subArrayIndexCount * 0,
      largestNumber * 0,
      resultantArray
    );
  }
}
*/

describe.skip("FREECODECAMP", () => {
  it("SHOULD RETURN AN ARRAY OF THE LARGEST NUMBERS IN THE SUB-ARRAYS", () => {
    expect(
      largestOfFour([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ])
    ).toEqual([27, 5, 39, 1001]);
    expect(
      largestOfFour([
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1],
      ])
    ).toEqual([9, 35, 97, 1000000]);
    expect(
      largestOfFour([
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, -10, 18, 21],
        [-72, -3, -17, -10],
      ])
    ).toEqual([25, 48, 21, -3]);
  });
});
