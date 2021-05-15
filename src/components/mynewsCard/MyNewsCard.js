import { useRef } from 'react';
import useImage from '../../hooks/useImage';
import useNewsData from '../../hooks/useNewsData';
import GridContainer from '../common/GridContainer';
import GridItem from '../common/GridItem';
import * as Styled from './MyNewsCard.style';

const MyNewsCard = () => {
    const logoRef = useRef();
    const { pressLogoUrls } = useNewsData(18);
    const { handleImageLoadFail } = useImage(logoRef);
    return (
        <Styled.MyNewsCardContainer>
            <GridContainer>
                {
                    pressLogoUrls.map((logoUrl) => 
                        <GridItem>
                            <Styled.ImageContainer>
                                <Styled.Image ref={ logoRef } src={logoUrl} onError={ handleImageLoadFail } alt="로고이미지"/>
                            </Styled.ImageContainer>
                        </GridItem>)
                }
            </GridContainer>
        </Styled.MyNewsCardContainer>
    );
};

export default MyNewsCard;