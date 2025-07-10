const lengthOfLastWord = (s) => {
  const str = s.trim();
  let i = str.length - 1;
  let count = 0;

  while (i >= 0 && str[i] !== " ") {
    count++;
    i--;
  }

  return count;
};
