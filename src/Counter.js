import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const containerStyle = {
  display: "flex",
};

const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

const Counter = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{number}</h1>
        <div style={containerStyle}>
          <button
            onClick={() => dispatch({ type: "MINUS_ONE" })}
            type="button"
            style={buttonStyle}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "ADD_ONE" })}
            type="button"
            style={buttonStyle}
          >
            +
          </button>
        </div>
      </header>
    </div>
  );
};

export default Counter;
