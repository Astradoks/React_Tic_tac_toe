import React from "react";
import "../styles.css";

export default function Item(props) {
  return <div className="item">{props.item}</div>;
}
