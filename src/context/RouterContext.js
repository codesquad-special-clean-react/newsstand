import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import PageNotFound from "../components/error/PageNotFound";
import usePageError from "../hooks/usePageError";
import { createHistory } from "../router/history";
import { formatLocationToRoute } from "../router/utils";

const history = createHistory();

const initialState = { route: formatLocationToRoute(history.location) };

const RouterContext = createContext(initialState);

const RouterContextProvider = ({ children }) => {
    const [route, setRoute] = useState(formatLocationToRoute(history.location));
    const [isPageNotFound] = usePageError(route);
    
    return <RouterContext.Provider value={{ route }}>
        { isPageNotFound ? <PageNotFound/> : children }
    </RouterContext.Provider>
}

export { history, RouterContext, RouterContextProvider };