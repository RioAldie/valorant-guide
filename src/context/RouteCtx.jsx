import { createContext, useState } from 'react';

const defaultValue = {
  value: '',
};

export const routeCtx = createContext(defaultValue);

const RouteCtxProvider = ({ children }) => {
  const [navActive, setNavActive] = useState(defaultValue.value);
  return (
    <routeCtx.Provider value={{ navActive, setNavActive }}>
      {children}
    </routeCtx.Provider>
  );
};

export default RouteCtxProvider;
