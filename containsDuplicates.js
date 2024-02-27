// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const test1 = [1, 2, 3, 1];
const test2 = [1, 2, 3, 4];
const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const containsDuplicate = (array) => {
  const record = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in record) {
      return true;
    } else {
      record[array[i]] += 1;
    }
  }
  return false;
};

console.log(containsDuplicate(test1));
console.log(containsDuplicate(test2));
console.log(containsDuplicate(test3));
