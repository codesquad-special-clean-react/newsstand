import styled from "styled-components";
import size from "../../utils/size";

const Ul = styled.ul`
    padding: 0 10px;
    margin: 0;
    width: ${size.listview.newslistWidth};
    box-sizing: border-box;
`;

const Li = styled.li`
    list-style-type: none;
    margin: 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export { Ul, Li };