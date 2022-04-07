import React from "react";

export default function Header({ valueMinus, valuePlus, value }) {
  return (
    <div className="container">
      <div className="counter">{value}</div>
      <button className="btn-plus" onClick={valuePlus}>
        Increase
      </button>
      <button className="btn-minus" onClick={valueMinus}>
        Decrease
      </button>
    </div>
  );
}
