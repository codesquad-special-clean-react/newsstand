import * as Styled from './App.style';
import PageNotFound from './components/error/PageNotFound';
import MyNewsCard from './components/mynewsCard/MyNewsCard';
import MyNewsList from './components/mynewsList/MyNewsList';
import NavigationBar from './components/navigation/NavigationBar';
import Press from './components/press/Press';
import { NewsDataContextProvider } from './context/NewsDataContext';
import { Router } from './router/components';
import Route from './router/components/Route';
import Switch from './router/components/Switch';
import { routes } from './router/routes';

function App() {
  const { list, card } = routes.mynews; 
  const { total : press } = routes.press;

  return <Styled.AppContainer>
    <NewsDataContextProvider>
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
    </NewsDataContextProvider>
  </Styled.AppContainer>
}

export default App;
