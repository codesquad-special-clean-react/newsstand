import GlobalStyle from "../styles/global-style";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Index from "components/pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
