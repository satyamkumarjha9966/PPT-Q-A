// Move Zeroes

let nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  let nextNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[nextNonZero], nums[i]] = [nums[i], nums[nextNonZero]];
      nextNonZero++; 
    }
  }
}

moveZeroes(nums);
console.log(nums);
