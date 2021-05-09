import {
  Breadcrumb,
  Divider,
  Layout,
  LayoutSelector,
  Menu,
  Navigator,
  Navigators,
  StyledHeader,
  Title,
} from "./styles";
import { useRecoilState } from "recoil";
import { currentNewsState, newsListState } from "../../../recoils/atoms";

const Header = () => {
  const [newsList] = useRecoilState(newsListState);
  const [currentNews, setCurrentNews] = useRecoilState(currentNewsState);

  const raiseError = () => {
    if (newsList.length < 1) {
      throw new Error("뉴스리스트를 불러오지 못했습니다.");
    }
  };

  const handleClickNext = () => {
    raiseError();
    if (!currentNews) {
      setCurrentNews(newsList[0]);
    } else {
      const nextIndex = newsList.indexOf(currentNews) + 1;
      const newIndex = nextIndex >= newsList.length ? 0 : nextIndex;
      setCurrentNews(newsList[newIndex]);
    }
  };

  const handleClickPrevious = () => {
    raiseError();
    const initialIndex = newsList.length - 1;
    if (!currentNews) {
      setCurrentNews(newsList[initialIndex]);
    } else {
      const previousIndex = newsList.indexOf(currentNews) - 1;
      const newIndex = previousIndex < 0 ? initialIndex : previousIndex;
      setCurrentNews(newsList[newIndex]);
    }
  };

  return (
    <StyledHeader>
      <Breadcrumb>
        <span>뉴스스탠드</span>
        <Divider>></Divider>
      </Breadcrumb>
      <Title>
        <div>
          <Menu>전체 언론사</Menu>
          <Menu>MY 뉴스</Menu>
        </div>
        <LayoutSelector>
          <Layout>카드</Layout>
          <Layout>리스트</Layout>
        </LayoutSelector>
      </Title>
      <Navigators>
        <Navigator onClick={handleClickPrevious}>{"<"}</Navigator>
        <Navigator onClick={handleClickNext}>{">"}</Navigator>
      </Navigators>
    </StyledHeader>
  );
};

export default Header;
