import { createContext, useContext, useReducer } from "react";

const defaultValues = {
  combinedData: [],
  filteredData: [],
  mainRef: "",
};

const GeneralContext = createContext();

// action.type - my reduced switch type

function reducerActions(state, action) {
  switch (action.type) {
    case "COMBODATA":
      return {
        ...state,
        combinedData: action.newComboData,
      };
    case "FILTERDATA":
      return {
        ...state,
        filteredData: action.newFilteredData,
      };
    case "MAINREF":
      return {
        ...state,
        mainRef: action.newMainRef,
      };
    default:
      return state;
  }
}

export function GeneralContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultValues);

  return (
    <GeneralContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GeneralContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGeneralContext() {
  return useContext(GeneralContext);
}
