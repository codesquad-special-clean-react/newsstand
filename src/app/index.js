import GlobalStyle from "../styles/global-style";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        App
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
