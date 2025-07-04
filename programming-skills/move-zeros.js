const moveZeros = (nums) => {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== nonZeroIndex) {
        [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      }
      nonZeroIndex++;
    }
  }
};
