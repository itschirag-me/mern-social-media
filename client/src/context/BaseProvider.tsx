import React, { createContext, PropsWithChildren, useContext, useState } from "react";

const BaseContext = createContext({});

const BaseProvider = (props: PropsWithChildren) => {
  const [loader, setLoader] = useState(true);
  const baseContextValue = {
    loader,
    setLoader,
  };

  return <BaseContext.Provider value={baseContextValue} {...props} />;
};

const useBase: any = () => useContext(BaseContext);

export { BaseProvider, useBase };
