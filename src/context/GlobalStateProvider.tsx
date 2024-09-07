import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";
import { IGlobalState } from "../types";

type TGlobalStateContext = {
  globalState: IGlobalState;
  setGlobalState: Dispatch<SetStateAction<IGlobalState>>;
  showDialog: (node: ReactNode) => void
  closeDialog: () => void
}

const GlobalStateContext = createContext<TGlobalStateContext>(null!);

export const GlobalStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [globalState, setGlobalState] = useState<IGlobalState>({ isOpen: false, dialogContent: null });

  const showDialog = (node: ReactNode) => {
    setGlobalState({
      ...globalState,
      dialogContent: node
    })
  };

  const closeDialog = () => {
    setGlobalState({
      ...globalState,
      dialogContent: null
    })
  };

  return (
    <GlobalStateContext.Provider
      value={{
        globalState,
        setGlobalState,
        showDialog,
        closeDialog
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
