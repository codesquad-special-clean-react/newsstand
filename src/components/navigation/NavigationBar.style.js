import styled from "styled-components";
import color from '../../utils/colors';

const Container = styled.div`
    position: relative;

    & * {
        font-size: 20px;
        font-weight: bold;
    }
`;

const Categories = styled.div`
    position: absolute;

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
    display: inline-block;
    position: absolute;
    right: 200px;
`

const ArrowContainer = styled.div`

`;

export { Container, Categories, Divider, CardTypes, ArrowContainer };