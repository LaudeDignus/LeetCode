const tictactoe = (moves) => {
    const createPlayer = () => ({
        rows: [0, 0, 0],
        cols: [0, 0, 0],
        d1: 0,
        d2: 0
    });

    const players = [createPlayer(), createPlayer()];
    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        const p = players[i % 2]
        p.rows[row]++;
        p.cols[col]++;
        if (row === col) p.d1++;
        if (row + col === 2) p.d2++;
        if (p.rows.includes(3) || p.cols.includes(3) || p.d1 === 3 || p.d2 === 3) return i % 2 === 0 ? "A" : "B";
    }

    if (moves.length === 9) return "Draw";
    else return "Pending"
};