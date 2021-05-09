import styled from "styled-components";
import MainNavigation from "../../molecules/main-navigation";
import MainNewsList from "../../molecules/main-news-list";

const StyledMain = styled.main`
  display: flex;
  flex: 1;
`;

const Main = () => {
  return (
    <StyledMain>
      <MainNavigation />
      <MainNewsList />
    </StyledMain>
  );
};

export default Main;
