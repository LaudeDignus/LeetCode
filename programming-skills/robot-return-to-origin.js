// const direction = {
//         "U": [0, 1],
//         "D": [0, -1],
//         "R": [1, 0],
//         "L": [-1, 0]
//     }

//     let x = 0;
//     let y = 0;

//     for (let move of moves) {
//         const [dx, dy] = direction[move];
//         x += dx;
//         y += dy;
//     }
//     return x === 0 && y === 0

const judgeCircle = (moves) => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        y += 1;
        break;
      case "D":
        y -= 1;
        break;
      case "R":
        x += 1;
        break;
      case "L":
        x -= 1;
        break;
    }
  }

  return x === 0 && y === 0;
};
