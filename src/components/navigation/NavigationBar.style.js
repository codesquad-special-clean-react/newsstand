import styled from "styled-components";
import color from '../../utils/colors';

const horizontalPaddingSize = '20px';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    border: 1px solid ${color.borderColor};
    padding: 10px 0;
    display: flex;
    align-items: center;
    background-color: ${color.white};

    & * {
        font-size: 20px;
        font-weight: bold;
    }
`;

const Categories = styled.div`
    position: absolute;
    left: ${horizontalPaddingSize};

    & > * {
        display: inline-block;
        margin-left: 10px;
    }
`;

const Divider = styled.div`
    width: 1px;
    height: 15px;
    background: ${color.borderColor};
`;

const CardTypes = styled.div`
    right: 200px;
`

const ArrowContainer = styled.div`
    position: absolute;
    right: ${horizontalPaddingSize};
`;

export { Container, Categories, Divider, CardTypes, ArrowContainer };