const plusOne = (digits) => {
  let remain = 0;
  let lastIndex = digits.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    if (i === lastIndex) {
      if (digits[i] + 1 >= 10) {
        digits[i] = 0;
        remain = 1;
      } else {
        digits[i] += 1;
        return digits;
      }
    } else {
      if (digits[i] + remain >= 10) {
        digits[i] = 0;
        remain = 1;
      } else {
        digits[i] += remain;
        remain = 0;
      }
    }
  }

  if (remain > 0) {
    digits.unshift(remain);
  }
  return digits;
};
