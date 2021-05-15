import { useRef } from 'react';
import useThumbnail from '../../hooks/useThumbnail';
import * as Styled from './ThumbNews.style';

const ThumbNews = ({ thumbNews : { imageUrl, text } }) => {
    const thumbnailRef = useRef();
    const {handleImageLoadFail} = useThumbnail(thumbnailRef);

    return (
        <Styled.ThumbNewsContainer>
            <Styled.ImageContainer>
                <Styled.Image ref={thumbnailRef} src={ imageUrl } onError={handleImageLoadFail} alt="news_thumbnail" />
            </Styled.ImageContainer>
            <Styled.Span>{text}</Styled.Span>
        </Styled.ThumbNewsContainer>
    );
};

export default ThumbNews;