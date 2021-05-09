import { useRecoilState } from "recoil";
import { currentNewsState } from "../../../recoils/atoms";
import { ListItem, StyledDiv } from "./styles";

const MainNewsList = () => {
  const [currentNews] = useRecoilState(currentNewsState);

  return (
    <StyledDiv>
      <ul>
        {currentNews &&
          currentNews.newslist.map((n, i) => {
            return <ListItem key={i}>{n}</ListItem>;
          })}
      </ul>
    </StyledDiv>
  );
};

export default MainNewsList;
