import { createContext, useContext, useReducer } from "react";

const defaultValues = {
  theme: "light",
  colorScheme: "orange",
};

const ThemeContext = createContext();

// action.type - my reduced switch type

function reducerActions(state, action) {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        theme: "dark",
      };
    case "LIGHT":
      return {
        ...state,
        theme: "light",
      };
    case "BLUE":
      return {
        ...state,
        colorScheme: "blue",
      };
    case "ORANGE":
      return {
        ...state,
        colorScheme: "orange",
      };
    case "RED":
      return {
        ...state,
        colorScheme: "red",
      };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultValues);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  return useContext(ThemeContext);
}
