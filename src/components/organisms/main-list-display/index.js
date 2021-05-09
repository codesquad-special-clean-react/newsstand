import MainNavigation from "../../molecules/main-navigation";
import MainNewsList from "../../molecules/main-news-list";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const MainListDisplay = () => {
  return (
    <Container>
      <MainNavigation />
      <MainNewsList />
    </Container>
  );
};

export default MainListDisplay;
