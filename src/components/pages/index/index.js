import styled from "styled-components";
import Header from "components/organisms/header";
import Main from "components/organisms/main";
import { useFetch } from "hooks/useFetch";
import { fetchNewsList } from "apis/news";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { newsListState } from "recoils/atoms";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index = () => {
  const { data, loading, error } = useFetch({ fetch: fetchNewsList });
  const [newsList, setNewsList] = useRecoilState(newsListState);

  useEffect(() => {
    if (data && data.length > 0) {
      setNewsList(data);
    }
  }, [data, setNewsList]);

  return (
    <StyledDiv>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <Header />
      {newsList && <Main />}
    </StyledDiv>
  );
};

export default Index;
