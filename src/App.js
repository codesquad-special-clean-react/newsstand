import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <div>
          <span>뉴스스탠드 ></span>
          <Link to="/all"> 전체언론사 </Link> |<Link to="/my"> MY 뉴스</Link>
        </div>
        <Route path="/my">
          <Link to="/my/card">카드형 </Link> |<Link to="/my/list"> 목록형</Link>
        </Route>
        <div>이전 / 다음</div>
      </nav>
      <Switch>
        <Route path="/all">전체언론사</Route>
        <Route path="/my">MY 뉴스</Route>
        <Route path="/">전체언론사 or MY 뉴스 중 선택해주세요.</Route>
      </Switch>
    </Router>
  );
}

export default App;
