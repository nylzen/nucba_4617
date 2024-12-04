import { useReducer } from "react";
import { createContext } from "react";
import { COUNTER_INITIAL_STATE, countReducer } from "../reducers/countReducer";
import { useContext } from "react";

const CountContext = createContext();

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, COUNTER_INITIAL_STATE);

  const data = { state, dispatch };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};

export const useCountContext = () => useContext(CountContext);
