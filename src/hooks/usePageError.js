import { useEffect } from "react";
import { useState } from "react"
import { getRoutesPaths } from "../router/utils";

const usePageError = (route) => {
    const [isPageNotFound, setPageNotFound] = useState(false);

    const routePaths = getRoutesPaths();

    useEffect(() => {
        setPageNotFound(routePaths.indexOf(route.path) === -1);
    }, [routePaths, route]);

    
    return [isPageNotFound];
}

export default usePageError;