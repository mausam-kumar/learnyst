import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";
import { IGlobalState } from "../types";

type TGlobalStateContext = {
  globalState: IGlobalState;
  setGlobalState: Dispatch<SetStateAction<IGlobalState>>;
}

const GlobalStateContext = createContext<TGlobalStateContext>(null!);

export const GlobalStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [globalState, setGlobalState] = useState<IGlobalState>({ isOpen: false });

  return (
    <GlobalStateContext.Provider
      value={{
        globalState,
        setGlobalState,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateProvider",
    );
  }
  return context;
};
