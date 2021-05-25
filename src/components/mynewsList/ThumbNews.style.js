import styled from "styled-components";
import { transparentize } from "polished";
import color from "../../utils/colors";
import size from "../../utils/size";

const { imageWidth, imageHeight } = size.listview;

const ThumbNewsContainer = styled.div`
    position: relative;
    width: ${imageWidth};
    height: ${imageHeight};
    margin-top: 10px;
    box-sizing: border-box;
`;

const ImageContainer = styled.div`
    width: ${imageWidth};
    height: ${imageHeight};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Span = styled.span`
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${transparentize(0.5, color.black)};
    color: ${color.white};
    padding: 5px;
`;

export { ThumbNewsContainer, ImageContainer, Image, Span }; 