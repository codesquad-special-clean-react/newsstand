import * as Styled from './App.style';
import NavigationBar from './components/navigation/NavigationBar';
import { Router } from './router/components';

function App() {
  return <Styled.AppContainer>
    <NavigationBar/>
    <Router>
    </Router>
  </Styled.AppContainer>
}

export default App;
