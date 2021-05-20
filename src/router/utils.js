import qs from 'querystringify';
import {routes} from './routes';

const formatLocationToRoute = ({pathname: path, hash, search}) => {
  return {path, hash, query: search ? qs.parse(search) : undefined};
};

const getRoutesPaths = (() => {
  const routePaths = Object.values(routes).reduce((acc, firstDepthRoute)=>{
    return [...acc, ...Object.values(firstDepthRoute)];
  }, []).map(({path}) => path);

  return () => {
    return routePaths;
  };
})();

export {formatLocationToRoute, getRoutesPaths};
