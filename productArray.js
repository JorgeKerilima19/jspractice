// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

const test1 = [1, 2, 3, 4];
const test2 = [-1, 1, 0, -3, 3];
const test3 = [1, 4, 3, 1];

const productArray = (array) => {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    let value = 1;
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      value *= array[j];
    }
    finalArray.push(value);
  }
  return finalArray;
};

console.log(productArray(test3));
