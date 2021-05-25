import {useRef} from 'react';
import useImage from '../../hooks/useImage';
import * as Styled from './ThumbNews.style';

const ThumbNews = ({thumbNews: {imageUrl, text}}) => {
  const thumbnailRef = useRef();
  const {handleImageLoadFail} = useImage(thumbnailRef);

  return (
    <Styled.ThumbNewsContainer>
      <Styled.ImageContainer>
        <Styled.Image ref={thumbnailRef} src={ imageUrl } onError={ handleImageLoadFail } alt="news_thumbnail" />
      </Styled.ImageContainer>
      <Styled.Span>{text}</Styled.Span>
    </Styled.ThumbNewsContainer>
  );
};

export default ThumbNews;
