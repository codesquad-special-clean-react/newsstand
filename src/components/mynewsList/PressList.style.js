import { lighten } from "polished";
import styled from "styled-components";
import color from "../../utils/colors";
import size from "../../utils/size";

const Ul = styled.ul`
    padding: 0;
    width: ${size.listview.pressWidth};
`;

const Li = styled.li`
    color: ${({isSelected})=> isSelected ? lighten(0.2, color.textColor) : color.primaryColor};
    list-style-type: none;
    font-weight: 700;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
`;

export { Ul, Li };