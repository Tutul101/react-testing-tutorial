import { useReducer } from "react";

const UserReduceHook = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  const initialCount = {
    count: 0,
  };
  const [state, dispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <h1>Count: {state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}>
        Decrement
      </button>
    </div>
  );
};

export default UserReduceHook;
