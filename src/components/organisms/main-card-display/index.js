import styled from "styled-components";
import Card from "../../molecules/card";
import useFilteredNewsList from "../../../hooks/useFilteredNewsList";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const MainCardDisplay = () => {
  const filteredNewsList = useFilteredNewsList();

  return (
    <Container>
      {filteredNewsList.map((n) => {
        return <Card key={n.id} news={n} />;
      })}
    </Container>
  );
};

export default MainCardDisplay;
