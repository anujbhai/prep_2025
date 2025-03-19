(function() {
  const chessboard = (count) => {
    let board = "";

    for (let i = 1; i <= count; i++) {
      for (let j = 1; j <= count; j++) {
        board += (i + j) % 2 === 0 ? "#" : " ";
      }
      board += "\n";
    }

    console.log(board);
  };

  chessboard(12);
})();

