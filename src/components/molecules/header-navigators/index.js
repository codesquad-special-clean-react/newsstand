import { Navigator, Navigators } from "./styles";
import { useRecoilState } from "recoil";
import { currentNewsState } from "../../../recoils/atoms";
import useFilteredNewsList from "../../../hooks/useFilteredNewsList";

const HeaderNavigators = () => {
  const filteredNewsList = useFilteredNewsList();
  const [currentNews, setCurrentNews] = useRecoilState(currentNewsState);

  const raiseError = () => {
    if (filteredNewsList.length < 1) {
      throw new Error("뉴스리스트를 불러오지 못했습니다.");
    }
  };

  const handleClickNext = () => {
    raiseError();
    if (!currentNews) {
      setCurrentNews(filteredNewsList[0]);
    } else {
      const nextIndex = filteredNewsList.indexOf(currentNews) + 1;
      const newIndex = nextIndex >= filteredNewsList.length ? 0 : nextIndex;
      setCurrentNews(filteredNewsList[newIndex]);
    }
  };

  const handleClickPrevious = () => {
    raiseError();
    const initialIndex = filteredNewsList.length - 1;
    if (!currentNews) {
      setCurrentNews(filteredNewsList[initialIndex]);
    } else {
      const previousIndex = filteredNewsList.indexOf(currentNews) - 1;
      const newIndex = previousIndex < 0 ? initialIndex : previousIndex;
      setCurrentNews(filteredNewsList[newIndex]);
    }
  };

  return (
    <Navigators>
      <Navigator onClick={handleClickPrevious}>{"<"}</Navigator>
      <Navigator onClick={handleClickNext}>{">"}</Navigator>
    </Navigators>
  );
};

export default HeaderNavigators;
