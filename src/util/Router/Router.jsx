import React, { useCallback, useEffect, useState } from 'react';
import { NotFound } from './NotFound';

export const HistoryContext = React.createContext({
  history: window.history,
});

export const Router = ({ routeList, children }) => {
  const [routes] = useState(() => Object.keys(routeList).map((key) => routeList[key].path));

  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const handlePopStateEvent = useCallback(({ state }) => {
    if (state && state.to) {
      setCurrentPath(state.to);
    }
  }, []);

  const is404 = routes.indexOf(currentPath) === -1;

  useEffect(() => {
    window.addEventListener('popstate', handlePopStateEvent, false);
    return () => {
      window.removeEventListener('popstate', handlePopStateEvent, false);
    };
  }, []);

  return (
    <HistoryContext.Provider
      value={{
        currentPath,
        setCurrentPath,
      }}
    >
      {is404 ? <NotFound /> : children}
    </HistoryContext.Provider>
  );
};
