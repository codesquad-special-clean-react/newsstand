import { useRecoilState } from "recoil";
import { currentNewsState } from "../../../recoils/atoms";
import { Navigation, NavItem } from "./styles";
import useFilteredNewsList from "../../../hooks/useFilteredNewsList";

const MainNavigation = () => {
  const [currentNews, setCurrentNews] = useRecoilState(currentNewsState);
  const handleClick = (news) => () => {
    setCurrentNews(news);
  };
  const filteredNewsList = useFilteredNewsList();

  return (
    <Navigation>
      <ul>
        {filteredNewsList.map((news) => (
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
