import useNewsData from '../../hooks/useNewsData';
import * as Styled from './MyNewsList.style';
import NewsContainer from './NewsContainer';
import PressList from './PressList';

const MyNewsList = () => {
    const { presses, selectedPressIdx, selectPressIdx, newsList, thumbNews } = useNewsData();

    return (
        <Styled.MyNewsListContainer>
            <PressList presses={presses} selectedPressIdx={selectedPressIdx} selectPressIdx={selectPressIdx} />
            <NewsContainer newsList={newsList} thumbNews={thumbNews}/>
        </Styled.MyNewsListContainer>
    );
};

export default MyNewsList;