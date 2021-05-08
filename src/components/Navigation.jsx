import { Link, Route } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div>
        <span>뉴스스탠드 ></span>
        <Link to={`/all`}> 전체언론사 </Link> |<Link to={`/my`}> MY 뉴스</Link>
      </div>
      <Route path="/my">
        <Link to="/my/card">카드형 </Link> |<Link to="/my/list"> 목록형</Link>
      </Route>
      <div>이전 / 다음</div>
    </nav>
  );
}
