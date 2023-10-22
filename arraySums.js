// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// const nums = [3, 3];
const nums = [1, 3, 4, 2];
const target = 6;

for (let i = 0; i < nums.length; i++) {
  for (let j = nums.length - 1; j >= 0; j--) {
    console.log("----------------->j", j);
    console.log("----------------->i", i);
    let left = nums[i];
    let right = nums[j];
    if (left + right === target) {
      console.log([left, right], "Values");
      console.log(nums.indexOf(left), nums.indexOf(right), "index");
      if (nums.indexOf(left) !== nums.lastIndexOf(right)) {
        console.log(nums.indexOf(left), nums.lastIndexOf(right), "Result");
        return;
      } else {
        console.log(nums.indexOf(left), nums.indexOf(right), "Negative");
      }
      console.log([i, j], "Third");
    }
  }
  console.log([-1, -1]);
}
