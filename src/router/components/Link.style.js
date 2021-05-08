import { lighten } from "polished";
import styled from "styled-components";
import color from "../../utils/colors";

const A = styled.a`
    text-decoration: none;
    color: ${({isSelected}) => (isSelected ? color.textColor : lighten(0.3, color.textColor))}};

    & svg {
        stroke: ${({isSelected}) => (isSelected ? color.textColor : lighten(0.3, color.textColor))}};
    }
`;

export { A };