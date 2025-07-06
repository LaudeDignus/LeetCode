const romanToInt = (s) => {
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let number = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanNumber[s[i]];
    const next = romanNumber[s[i + 1]];

    if (current < next) {
      number += next - current;
      i++;
    } else {
      number += current;
    }
  }

  return number;
};
