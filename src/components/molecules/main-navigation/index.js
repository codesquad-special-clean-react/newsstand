import { useRecoilState } from "recoil";
import { currentNewsState, newsListState } from "../../../recoils/atoms";
import { Navigation, NavItem } from "./styles";

const MainNavigation = () => {
  const [newsList] = useRecoilState(newsListState);
  const [currentNews, setCurrentNews] = useRecoilState(currentNewsState);
  const handleClick = (news) => () => {
    setCurrentNews(news);
  };

  return (
    <Navigation>
      <ul>
        {newsList.map((news) => (
          <NavItem
            key={news.id}
            onClick={handleClick(news)}
            isActive={currentNews && currentNews.id === news.id}
          >
            {news.company}
          </NavItem>
        ))}
      </ul>
    </Navigation>
  );
};

export default MainNavigation;
