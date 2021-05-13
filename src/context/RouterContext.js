import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import { createHistory } from "../router/history";
import { formatLocationToRoute } from "../router/utils";

const history = createHistory();

const initialState = { route: formatLocationToRoute(history.location) };

const RouterContext = createContext(initialState);

const RouterContextProvider = ({ children }) => {
    const [route, setRoute] = useState(formatLocationToRoute(history.location));
    
    return <RouterContext.Provider value={{ route }}>
        {children}
    </RouterContext.Provider>
}

export { history, RouterContext, RouterContextProvider };