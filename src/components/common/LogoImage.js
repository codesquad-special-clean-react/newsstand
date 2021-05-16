import { useRef } from 'react';
import useImage from '../../hooks/useImage';
import * as Styled from './LogoImage.style';

const LogoImage = (props) => {
    const { logoUrl } = props;
    const logoRef = useRef();
    const { handleImageLoadFail } = useImage(logoRef);

    return (
        <Styled.ImageContainer>
            <Styled.Image { ...props } ref={ logoRef } src={logoUrl} onError={ handleImageLoadFail } alt="로고이미지"/>
        </Styled.ImageContainer>
    );
};

export default LogoImage;