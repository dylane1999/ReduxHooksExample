import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_ONE, MINUS_ONE } from "./actions";
import { updateNum } from "./actions/index";
import { connect } from "react-redux";

const containerStyle = {
  display: "flex",
};

const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

const Counter = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.number}</h1>
        <div style={containerStyle}>
          <button
            onClick={() => {
              props.updateNum(props.number - 1)
            }}
            type="button"
            style={buttonStyle}
          >
            -
          </button>
          <button
            onClick={() => {
              props.updateNum(props.number + 1)
            }}
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

function mapStatetoProps(state) {
  return {
    number: state.number,
  };
}

export default connect(mapStatetoProps, { updateNum })(Counter);
