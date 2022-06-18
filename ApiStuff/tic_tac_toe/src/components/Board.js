import React from "react";

export default function Board() {
  const n = 9;

  const [value, setValue] = React.useState([...Array(n).fill(null)]);
  const [player, setPlayer] = React.useState(true);

  function handleClick(i) {
    const newValue = [...value];

    const play = player ? "X" : "O";
    if (newValue[i] !== null) {
      return;
    }
    newValue[i] = play;
    setValue(newValue);
    setPlayer(!player);
  }

  function resetGame() {
    setValue([...Array(n).fill(null)]);
  }

  return (
    <>
      <div className="container" id="main">
        <span id="turn">Tic Tac Toe</span>
        {value.map((_e, i) => {
          return (
            <div
              className="box"
              id={`box${i + 1}`}
              onClick={() => handleClick(i)}
            >
              {value[i]}
            </div>
          );
        })}
      </div>

      <button className="btn btn-rounded" id="replay" onClick={resetGame}>
        Play Again
      </button>
    </>
  );
}
