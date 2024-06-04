import { createContext, useContext, useReducer } from "react";

const defaultValues = {
  imageSize: 100,
  isLarge: false,
};

const MyContext = createContext();

// action.type - my reduced switch type

function reducerActions(state, action) {
  switch (action.type) {
    case "LARGEIMG":
      return {
        ...state,
        imageSize: 150,
      };
    case "NORMALIMG":
      return {
        ...state,
        imageSize: 100,
      };
    case "ENLARGE":
      return {
        ...state,
        isLarge: true,
      };
    case "SHRINK":
      return {
        ...state,
        isLarge: false,
      };
    default:
      return state;
  }
}

export function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultValues);

  return (
    <MyContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMyContext() {
  return useContext(MyContext);
}
