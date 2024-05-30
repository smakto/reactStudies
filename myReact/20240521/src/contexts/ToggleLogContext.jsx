import { createContext, useContext, useReducer } from "react";

const defaultValues = {
  logs: true,
  prescriptions: true,
};

const ToggleLogContext = createContext();

// action.type - my reduced switch type

function reducerActions(state, action) {
  switch (action.type) {
    case "logsOFF":
      return {
        ...state,
        logs: false,
      };
    case "logsON":
      return {
        ...state,
        logs: true,
      };
    case "prescriptionsOFF":
      return {
        ...state,
        prescriptions: false,
      };
    case "prescriptionsON":
      return {
        ...state,
        prescriptions: true,
      };
    default:
      return state;
  }
}

export function ToggleLogProvider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultValues);

  return (
    <ToggleLogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ToggleLogContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToggleLogContext() {
  return useContext(ToggleLogContext);
}
