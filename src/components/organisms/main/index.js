import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { LAYOUTS } from "../../../constants/layouts";
import MainListDisplay from "../main-list-display";

const StyledMain = styled.main`
  display: flex;
  flex: 1;
`;

const Main = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  console.log(query);
  return (
    <StyledMain>
      {(!query.layout || query.layout === LAYOUTS.LIST) && <MainListDisplay />}
    </StyledMain>
  );
};

export default Main;
