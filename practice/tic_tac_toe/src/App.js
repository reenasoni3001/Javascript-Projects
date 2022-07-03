import "./App.css";
import React from "react";

function App() {
  const [player, setPlayer] = React.useState(true);

  const SIZE = 3;
  const [board, setBoard] = React.useState(
    Array(SIZE).fill(Array(SIZE).fill(null))
  );

  function handlePlayerClick(rowIndex, columnIndex) {
    const newBoard = JSON.parse(JSON.stringify(board));

    if (newBoard[rowIndex][columnIndex]) {
      //this is for testing purpose
      return;
    }
    const play = player ? "X" : "O";
    newBoard[rowIndex][columnIndex] = play;

    setPlayer(!player);
    setBoard(newBoard);
  }
  function resetBoard() {
    setBoard(Array(SIZE).fill(Array(SIZE).fill(null)));
  }
  return (
    <div className="App">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, columnIndex) => (
            <div
              key={`${rowIndex}-${columnIndex}`}
              className="cell"
              onClick={() => handlePlayerClick(rowIndex, columnIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
      <button onClick={resetBoard}>Reset</button>
    </div>
  );
}

export default App;
