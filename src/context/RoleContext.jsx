import { createContext, useEffect, useReducer } from "react";
import RoleReducer from "./RoleReducer";
const INITIAL_STATE = {
    currentRole: JSON.parse(localStorage.getItem("projet_pfe_role")) || null,
};

export const RoleContext = createContext(INITIAL_STATE);

export const RoleContextProvider = ({ children }) => {
  const [state, dispatchRole] = useReducer(RoleReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("projet_pfe_role", JSON.stringify(state.currentRole));
  }, [state.currentRole]);

  return (
    <RoleContext.Provider value={{ currentRole: state.currentRole, dispatchRole }}>
      {children}
    </RoleContext.Provider>
  );
};