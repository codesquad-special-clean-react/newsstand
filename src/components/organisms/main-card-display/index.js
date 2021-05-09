import styled from "styled-components";
import { useRecoilState } from "recoil";
import { newsListState } from "../../../recoils/atoms";
import Card from "../../molecules/card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const MainCardDisplay = () => {
  const [newsList] = useRecoilState(newsListState);

  return (
    <Container>
      {newsList.map((n) => {
        return <Card key={n.id} news={n} />;
      })}
    </Container>
  );
};

export default MainCardDisplay;
