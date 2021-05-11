import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import AppStyle from "./App.style"

const App = () => {
  return (
    <AppStyle>
      <RecoilRoot>
        <Router>
          <Navbar />
          <Main />
        </Router>
      </RecoilRoot>
    </AppStyle>
  );
}

export default App;
