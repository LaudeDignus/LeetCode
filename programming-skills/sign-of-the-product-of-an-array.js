const arraySign = (nums) => {
  if (nums.includes(0)) return 0;
  return nums.reduce((a, b) => a * b, 1) > 0 ? 1 : -1;
};
