const isMonotonic = (nums) => {
  let increase = null;
  let decrease = null;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      decrease = true;
    } else if (nums[i] < nums[i + 1]) {
      increase = true;
    }

    if (increase && decrease) return false;
  }
  return true;
};
