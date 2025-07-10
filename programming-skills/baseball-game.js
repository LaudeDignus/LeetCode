const calPoints = (operations) => {
  let score = [];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        score.push(score[score.length - 1] + score[score.length - 2]);
        break;
      case "C":
        score.pop();
        break;
      case "D":
        score.push(score[score.length - 1] * 2);
        break;
      default:
        score.push(+operations[i]);
    }
  }
  return score.reduce((acc, curr) => acc + curr, 0);
};
