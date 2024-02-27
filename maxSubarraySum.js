// Given an integer array nums, find the
// subarray with the largest sum, and return its sum.

const test1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const test2 = [-1, -2, -3, -4, -5];
const test3 = [5, -1, -2, 10, -20, 15];

const maxSumSubArray = (array) => {
  let maxSum = array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      const newArray = array.slice(i, j);

      let partialSum = 0;
      for (let num of newArray) {
        partialSum += num;
      }
      if (partialSum > maxSum) {
        maxSum = partialSum;
      }
    }
  }
  return maxSum;
};

console.log(maxSumSubArray(test2));
