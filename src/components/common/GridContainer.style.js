import styled from "styled-components";
import size from "../../utils/size";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, ${size.cardview.gridHeight});
    grid-gap: 5px;
    width: 100%;
`;

export { GridContainer };