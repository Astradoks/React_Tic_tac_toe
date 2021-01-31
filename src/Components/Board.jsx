import React, { useState, useEffect } from "react";
import "../styles.css";
import Item from "./Item";

export default function Board(props) {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");
  const [item5, setItem5] = useState("");
  const [item6, setItem6] = useState("");
  const [item7, setItem7] = useState("");
  const [item8, setItem8] = useState("");
  const [item9, setItem9] = useState("");
  const [player, setPlayer] = useState(props.player1);
  const [gameText, setGameText] = useState("Next player turn");
  const [stop, setStop] = useState("");
  const [buttonText, setButtonText] = useState(props.button);
  useEffect(() => {
    if (
      props.player1 === "" ||
      props.player2 === "" ||
      props.player1 === props.player2 ||
      props.player1.length > 1 ||
      props.player2.length > 1
    ) {
      setStop(".");
      setGameText("");
    } else if (win(props.player1) || win(props.player2)) {
      setStop(".");
      if (props.computer) {
        if (win(props.player1)) {
          setGameText("Player " + props.player1 + " wins");
        } else if (win(props.player2)) {
          setGameText("Player " + props.player2 + " wins");
        }
      } else {
        if (player === props.player2) {
          setGameText("Player " + props.player1 + " wins");
        } else if (player === props.player1) {
          setGameText("Player " + props.player2 + " wins");
        }
      }
    } else if (tie()) {
      setGameText("Tie");
      setStop(".");
    }
  });
  function win(player) {
    if (
      (item1 === item2 && item1 === item3 && item1 === player) ||
      (item4 === item5 && item4 === item6 && item4 === player) ||
      (item7 === item8 && item7 === item9 && item7 === player) ||
      (item1 === item5 && item1 === item9 && item1 === player) ||
      (item3 === item5 && item3 === item7 && item3 === player) ||
      (item1 === item4 && item1 === item7 && item1 === player) ||
      (item2 === item5 && item2 === item8 && item2 === player) ||
      (item3 === item6 && item3 === item9 && item3 === player)
    ) {
      return true;
    } else {
      return false;
    }
  }
  function tie() {
    if (
      item1 !== "" &&
      item2 !== "" &&
      item3 !== "" &&
      item4 !== "" &&
      item5 !== "" &&
      item6 !== "" &&
      item7 !== "" &&
      item8 !== "" &&
      item9 !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  function restart() {
    setItem1("");
    setItem2("");
    setItem3("");
    setItem4("");
    setItem5("");
    setItem6("");
    setItem7("");
    setItem8("");
    setItem9("");
    setPlayer(props.player1);
    setGameText("Next player turn");
    setStop("");
    setButtonText("Restart");
  }
  function computer(position) {
    let flag = 0;
    let rand = 0;
    let count = 1;
    while (flag === 0) {
      count++;
      if (count === 1000) {
        flag = 1;
      }
      rand = Math.floor(Math.random() * 9 + 1);
      if (rand === 1 && item1 === "" && position !== 1) {
        setItem1(props.player2);
        flag = 1;
      } else if (rand === 2 && item2 === "" && position !== 2) {
        setItem2(props.player2);
        flag = 1;
      } else if (rand === 3 && item3 === "" && position !== 3) {
        setItem3(props.player2);
        flag = 1;
      } else if (rand === 4 && item4 === "" && position !== 4) {
        setItem4(props.player2);
        flag = 1;
      } else if (rand === 5 && item5 === "" && position !== 5) {
        setItem5(props.player2);
        flag = 1;
      } else if (rand === 6 && item6 === "" && position !== 6) {
        setItem6(props.player2);
        flag = 1;
      } else if (rand === 7 && item7 === "" && position !== 7) {
        setItem7(props.player2);
        flag = 1;
      } else if (rand === 8 && item8 === "" && position !== 8) {
        setItem8(props.player2);
        flag = 1;
      } else if (rand === 9 && item9 === "" && position !== 9) {
        setItem9(props.player2);
        flag = 1;
      }
    }
  }
  function turn(item, position) {
    if (item === stop) {
      if (position === 1) {
        setItem1(player);
      } else if (position === 2) {
        setItem2(player);
      } else if (position === 3) {
        setItem3(player);
      } else if (position === 4) {
        setItem4(player);
      } else if (position === 5) {
        setItem5(player);
      } else if (position === 6) {
        setItem6(player);
      } else if (position === 7) {
        setItem7(player);
      } else if (position === 8) {
        setItem8(player);
      } else if (position === 9) {
        setItem9(player);
      }
      if (props.computer) {
        setTimeout(() => {
          computer(position);
        }, 300);
      } else {
        if (player === props.player1) {
          setPlayer(props.player2);
        } else {
          setPlayer(props.player1);
        }
      }
    }
  }
  return (
    <div>
      <div className="board">
        <div onClick={() => turn(item1, 1)}>
          <Item item={item1} />
        </div>
        <div onClick={() => turn(item2, 2)}>
          <Item item={item2} />
        </div>
        <div onClick={() => turn(item3, 3)}>
          <Item item={item3} />
        </div>
        <div onClick={() => turn(item4, 4)}>
          <Item item={item4} />
        </div>
        <div onClick={() => turn(item5, 5)}>
          <Item item={item5} />
        </div>
        <div onClick={() => turn(item6, 6)}>
          <Item item={item6} />
        </div>
        <div onClick={() => turn(item7, 7)}>
          <Item item={item7} />
        </div>
        <div onClick={() => turn(item8, 8)}>
          <Item item={item8} />
        </div>
        <div onClick={() => turn(item9, 9)}>
          <Item item={item9} />
        </div>
      </div>
      <div className="game-text">{gameText}</div>
      <button onClick={restart}>{buttonText}</button>
    </div>
  );
}
