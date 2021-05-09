import styled from "styled-components";
import Header from "components/organisms/header";
import Main from "components/organisms/main";
import { useFetch } from "../../../hooks/useFetch";
import { fetchNewsList } from "../../../apis/news";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index = () => {
  const { data, loading, error } = useFetch({ fetch: fetchNewsList });
  console.log(data, loading, error);

  return (
    <StyledDiv>
      <Header />
      <Main />
    </StyledDiv>
  );
};

export default Index;
