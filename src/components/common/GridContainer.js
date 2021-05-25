import * as Styled from "./GridContainer.style";

const GridContainer = ({ children }) => {
    return (
        <Styled.GridContainer>
            { children }
        </Styled.GridContainer>
    );
};

export default GridContainer;