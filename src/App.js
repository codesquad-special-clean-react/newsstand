import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import * as Styled from './App.style';
import PageNotFound from './components/error/PageNotFound';
import MyNewsCard from './components/mynewsCard/MyNewsCard';
import MyNewsList from './components/mynewsList/MyNewsList';
import NavigationBar from './components/navigation/NavigationBar';
import Press from './components/press/Press';
import newsListAtom from './recoil/newsList';
import {Router} from './router/components';
import Route from './router/components/Route';
import Switch from './router/components/Switch';
import {routes} from './router/routes';
import {requestNewsData} from './utils/api';

function App() {
  const {list, card} = routes.mynews;
  const {total: press} = routes.press;
  const setNewsList = useSetRecoilState(newsListAtom);

  useEffect(()=>{
    (async () => {
      const data = await requestNewsData();
      setNewsList(data);
    })();
  }, []);

  return (
    <Styled.AppContainer>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact path='/'>
            <MyNewsList/>
          </Route>
          <Route path={routes.mynews.path}>
            <MyNewsList/>
          </Route>
          <Route path={list.path}>
            <MyNewsList/>
          </Route>
          <Route path={card.path}>
            <MyNewsCard/>
          </Route>
          <Route path={routes.press.path}>
            <Press/>
          </Route>
          <Route path={press.path}>
            <Press/>
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </Styled.AppContainer>
  );
}

export default App;
