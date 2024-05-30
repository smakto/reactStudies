import { createContext, useContext, useReducer } from "react";

const defaultValues = {
  name: "PetName",
};

const PetNameContext = createContext();

// action.type - my reduced switch type

function reducerActions(state, action) {
  switch (action.type) {
    case "NEWNAME":
      return {
        ...state,
        name: action.newPetName,
      };
    default:
      return state;
  }
}

export function PetNameProvider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultValues);

  return (
    <PetNameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PetNameContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePetNameContext() {
  return useContext(PetNameContext);
}
