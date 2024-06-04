import { createContext, useContext, useReducer } from "react";

const defaultValues = {
  combinedData: [],
  filteredData: [],
  prescriptionComment: "prscComment",
  prescriptionName: "prscName",
  prescriptionID: 0,
  petName: "petName",
  petDate: "petDate",
  petOwnerEmail: "ownerEmail",
  medName: "medName",
  medDescription: "medDescription",
  logDescription: "logDescription",
  logStatus: "logStatus",
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
    case "PRESCRPTIONCOMMENT":
      return {
        ...state,
        prescriptionComment: action.newPrescriptionComment,
      };
    case "PRESCRPTIONNAME":
      return {
        ...state,
        prescriptionName: action.newPrescriptionName,
      };
    case "PRESCRPTIONID":
      return {
        ...state,
        prescriptionID: action.newPrescriptionID,
      };
    case "NEWPETNAME":
      return {
        ...state,
        petName: action.newPetName,
      };
    case "NEWDOB":
      return {
        ...state,
        petDate: action.newDOB,
      };
    case "NEWEMAIL":
      return {
        ...state,
        petOwnerEmail: action.newOwnerEmail,
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
