import * as Styled from './GridItem.style';

const GridItem = ({ children }) => {
    return (
        <Styled.GridItem>
            { children }
        </Styled.GridItem>
    );
};

export default GridItem;