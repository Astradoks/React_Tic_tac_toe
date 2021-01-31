import React, { useState } from "react";
import Board from "./Board";
import "../styles.css";

export default function Game() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [computer, setComputer] = useState(false);
  return (
    <div className="game">
      <br />
      <h1>Tic Tac Toe</h1>
      <label htmlFor="player1">Player 1 Character </label>
      <input
        type="text"
        id="player1"
        onChange={(event) => setPlayer1(event.target.value)}
      />
      <br />
      <br />
      <label htmlFor="player2">Player 2 Character </label>
      <input
        type="text"
        id="player2"
        onChange={(event) => setPlayer2(event.target.value)}
      />
      <br />
      <br />
      <label htmlFor="computer">Play against computer </label>
      <input type="checkbox" onChange={(event) => setComputer(!computer)} />
      <Board
        player1={player1}
        player2={player2}
        button="Start"
        computer={computer}
      />
    </div>
  );
}
