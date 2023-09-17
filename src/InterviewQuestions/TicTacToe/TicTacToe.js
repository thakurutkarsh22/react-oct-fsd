import { useEffect, useState } from "react";
import styles from "./TicTacToe.module.css";

const GAME_STATE = {
  PLAYING: "PLAYING",
  DRAWN: "DRAWN",
  WON: "WON",
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const DEFAULT_PLAYER1 = {
  name: "player 1",
  symbol: "X",
  isWinner: false,
  value: [],
  canMove: true,
};

const DEFAULT_PLAYER2 = {
  name: "player 2",
  symbol: "0",
  isWinner: false,
  value: [],
  canMove: false,
};

function TicTacToe(props) {
  const [gamingBoard, setGamingBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const [gameStatus, setGameStatus] = useState(GAME_STATE.PLAYING);

  const [moveCounter, setMoveCOunter] = useState(0);

  const [restrictedCells, setRestictedCells] = useState([]);

  const [player1, setPlayer1] = useState({
    name: "player 1",
    symbol: "X",
    isWinner: false,
    value: [],
    canMove: true,
  });

  console.log(player1, "player 1 debug");

  const [player2, setPlayer2] = useState({
    name: "player 2",
    symbol: "0",
    isWinner: false,
    value: [],
    canMove: false,
  });

  console.log(player2, "player 2 debug");

  function handlerClickOfPlayer(position) {
    // Add cells in restricted list

    setRestictedCells((oldVal) => [...oldVal, position]);

    // Restrict after winning

    if (gameStatus === GAME_STATE.WON) {
      return;
    }

    if (player1.canMove && !restrictedCells.includes(position)) {
      const player1Obj = {
        name: player1.name,
        symbol: player1.symbol,
        isWinner: player1.isWinner,
        value: [...player1.value, position],
        canMove: false,
      };
      setPlayer1(player1Obj);
      setPlayer2((oldVal) => {
        return {
          ...oldVal,
          canMove: true,
        };
      });

      if (moveCounter >= 5) {
        // always check for the winner
        // checkWInner(player1);
      }
    }

    if (player2.canMove && !restrictedCells.includes(position)) {
      const player2Obj = {
        name: player2.name,
        symbol: player2.symbol,
        isWinner: player2.isWinner,
        value: [...player2.value, position],
        canMove: false,
      };

      setPlayer2(player2Obj);
      setPlayer1((oldVal) => {
        return {
          ...oldVal,
          canMove: true,
        };
      });

      if (moveCounter >= 5) {
        // always check for the winner
        // checkWInner(player2);
      }
    }
    setMoveCOunter((oldVal) => oldVal + 1);
  }

  useEffect(() => {
    if (moveCounter >= 5) {
      // always check for the winner

      if (player2.canMove) {
        checkWInner(player1);
      } else {
        checkWInner(player2);
      }
    }
  }, [player1.value, player2.value]);

  function checkWInner(player) {
    console.log("check in winner debug 1", player);
    const { name, value } = player;

    for (let i = 0; i < winningCombinations.length; i++) {
      const winningCombination = winningCombinations[i];
      let counter = 0;
      for (let j = 0; j < winningCombination.length; j++) {
        let winningNumber = winningCombination[j];
        if (value.includes(winningNumber)) {
          counter++;
        }

        if (counter === 3) {
          console.log("check in winner debug 2");

          setGameStatus(GAME_STATE.WON);

          if (name === "player 1") {
            setPlayer1((oldVal) => {
              return {
                ...oldVal,
                isWinner: true,
              };
            });
          } else {
            setPlayer2((oldVal) => {
              return {
                ...oldVal,
                isWinner: true,
              };
            });
          }
        }
      }
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "300px",
          width: "600px",
          flexWrap: "wrap",
          margin: "50px",
        }}
      >
        {/* GRID */}

        {gamingBoard.map((position) => {
          return (
            <div
              key={position}
              style={{
                width: "150px",
                height: "90px",
                border: "1px solid black",
              }}
            >
              {/* Cell  */}
              <div
                onClick={() => handlerClickOfPlayer(position)}
                style={{ width: "100%", height: "100%" }}
              >
                {player1.value.map((playerxPos) => {
                  if (playerxPos === position) {
                    return <span>X</span>;
                  }
                })}

                {player2.value.map((playerxPos) => {
                  if (playerxPos === position) {
                    return <span>0</span>;
                  }
                })}
              </div>
            </div>
          );
        })}

        {/* WINNER */}
        {gameStatus === GAME_STATE.WON && (
          <div>{player1.isWinner ? "X" : "O"} Wins </div>
        )}
      </div>

      <button
        onClick={() => {
          setPlayer1(DEFAULT_PLAYER1);
          setPlayer2(DEFAULT_PLAYER2);
          setGameStatus(GAME_STATE.PLAYING);
          setRestictedCells([]);
        }}
      >
        Reset Button
      </button>
    </>
  );
}

export default TicTacToe;
