import { createContext, useContext, useReducer } from "react";

const defaultValues = {
  counter: 0,
  title: "None",
  counterTwo: 0,
};

const CounterContext = createContext();

// action.type - my reduced switch type

function reducerActions(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD5":
      return {
        ...state,
        counterTwo: state.counterTwo + 5,
      };
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.newTitle,
      };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultValues);

  return (
    <CounterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCounterContext() {
  return useContext(CounterContext);
}
