import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { LAYOUTS } from "../../../constants/layouts";
import MainListDisplay from "../main-list-display";
import MainCardDisplay from "../main-card-display";

const StyledMain = styled.main`
  display: flex;
  flex: 1;
`;

const Main = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  return (
    <StyledMain>
      {(!query.layout || query.layout === LAYOUTS.LIST) && <MainListDisplay />}
      {query.layout === LAYOUTS.CARD && <MainCardDisplay />}
    </StyledMain>
  );
};

export default Main;
