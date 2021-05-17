import * as Styled from './NewsContainer.style';
import NewsList from "./NewsList"
import ThumbNews from "./ThumbNews"

const NewsContainer = ({ subscribedNewsData, selectedPressIdx}) => {
    const [selectedItem] = subscribedNewsData.filter(({ id }) => id === selectedPressIdx);

    return (
        <Styled.NewsContainer>
            {
                selectedItem && 
                <>
                    <ThumbNews thumbNews={selectedItem.thumbnews}/>
                    <NewsList newsList={selectedItem.newslist}/>
                </>
            }
        </Styled.NewsContainer>
    );
};

export default NewsContainer;