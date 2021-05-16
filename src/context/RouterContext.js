import { createContext, useState } from "react";
import { createHistory } from "../router/history";
import { formatLocationToRoute } from "../router/utils";

const history = createHistory();

const initialState = { route: formatLocationToRoute(history.location) };

const RouterContext = createContext(initialState);

const RouterContextProvider = ({ children }) => {
    const [route, setRoute] = useState(formatLocationToRoute(history.location));

    return <RouterContext.Provider value={{ route, setRoute }}>
        {children}
    </RouterContext.Provider>
}

export { history, RouterContext, RouterContextProvider };