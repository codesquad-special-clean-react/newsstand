import styled from "styled-components";

const MyNewsCardContainer = styled.div`
    display: flex;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export { MyNewsCardContainer, ImageContainer, Image };