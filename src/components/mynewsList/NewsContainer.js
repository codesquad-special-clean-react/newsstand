import * as Styled from './NewsContainer.style';
import NewsList from "./NewsList"
import ThumbNews from "./ThumbNews"

const NewsContainer = ({newsList, thumbNews}) => {
    return (
        <Styled.NewsContainer>
            <ThumbNews thumbNews={thumbNews}/>
            <NewsList newsList={newsList}/>
        </Styled.NewsContainer>
    );
};

export default NewsContainer;