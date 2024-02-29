const test1 = [-1, 0, 1, 2, -1, -4];
const test2 = [-1, 0, 1, 2, 3];

function uoToZero(nums) {
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let resultNums = [];
          resultNums.push(nums[i], nums[j], nums[k]);
          resultNums.sort();
          let alreadyExists = false;

          for (let arr of result) {
            if (arr.every((val, index) => val === resultNums[index])) {
              alreadyExists = true;
              break;
            }
          }
          if (!alreadyExists) {
            result.push(resultNums);
          }
        }
      }
    }
  }

  return result;
}
console.log(uoToZero(test1));
