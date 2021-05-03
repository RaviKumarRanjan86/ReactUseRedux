import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment5":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement5":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "2increment":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "2decrement":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>count={count.firstCounter}</h1>
      <h1>count={count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        decrement5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "2increment", value: 5 })}>
          2Increment
        </button>
        <button onClick={() => dispatch({ type: "2decrement", value: 5 })}>
          2decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default CounterTwo;
