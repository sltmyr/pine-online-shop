import React, { useState } from "react";

export const InitialLoadContext = React.createContext<{
  isInitialLoad: boolean;
  setInitialLoad: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isInitialLoad: true,
  setInitialLoad: () => {},
});

const InitialLoadContextProvider: React.FC = ({ children }) => {
  const [isInitialLoad, setInitialLoad] = useState(true);

  return (
    <InitialLoadContext.Provider value={{ isInitialLoad, setInitialLoad }}>
      {children}
    </InitialLoadContext.Provider>
  );
};

export default InitialLoadContextProvider;
