import qs from 'querystringify';
import { routes } from './routes';

const formatLocationToRoute = ({pathname: path, hash, search}) => {
    return { path, hash, query: qs.parse(search) }; 
}

const getRoutesPaths = (() => {
    const routePaths = Object.values(routes).reduce((acc, firstDepthRoute)=>{
        return [...acc, ...Object.values(firstDepthRoute)];
    }, []).map(({path}) => path);

    return () => {
        return routePaths;
    }
})();

export { formatLocationToRoute, getRoutesPaths };