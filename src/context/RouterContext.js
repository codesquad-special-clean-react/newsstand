import {createContext, useEffect, useState} from 'react';
import {createHistory} from '../router/history';
import {formatLocationToRoute} from '../router/utils';

const history = createHistory();

const defaultValue = {
  route: '/',
  setRoute: () => {},
};

const RouterContext = createContext(defaultValue);

const RouterContextProvider = ({children}) => {
  const [route, setRoute] = useState(formatLocationToRoute(history.location));

  useEffect(() => {
    window.addEventListener('popstate', (event) => {
      event.preventDefault();
      setRoute(formatLocationToRoute({pathname: event.state.path}));
    });
  }, []);

  return <RouterContext.Provider value={{route, setRoute}}>
    {children}
  </RouterContext.Provider>;
};

export {history, RouterContext, RouterContextProvider};
