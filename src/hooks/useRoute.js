import {useEffect, useContext, useState} from 'react';
import {RouterContext, history} from '../context/RouterContext';
import {routes} from '../router/routes';

const useRoute = () => {
  const {route, setRoute} = useContext(RouterContext);
  const {path} = route;
  const [isMyNewsListSelected, selectMyNewsList] = useState(true);
  const [isMyNewsCardSelected, selectMyNewsCard] = useState(false);
  const [isMyNewsSelected, selectMyNews] = useState(isMyNewsListSelected || isMyNewsCardSelected);
  const [isPressSelected, selectPress] = useState(false);

  useEffect(() => {
    const {list, card} = routes.mynews;
    const {total: press} = routes.press;

    selectMyNewsList(path === list.path);
    selectMyNewsCard(path === card.path);
    selectPress(path === press.path);
  }, [path]);

  useEffect(() => {
    selectMyNews(isMyNewsListSelected || isMyNewsCardSelected);
  }, [isMyNewsListSelected, isMyNewsCardSelected]);

  return {route, setRoute, isMyNewsListSelected, isMyNewsCardSelected, isPressSelected, isMyNewsSelected, history};
};

export default useRoute;
