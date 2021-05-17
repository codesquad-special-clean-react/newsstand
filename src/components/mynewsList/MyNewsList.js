import useNewsData from '../../hooks/useNewsData';
import NoSubscribed from '../common/NoSubscribed';
import * as Styled from './MyNewsList.style';
import NewsContainer from './NewsContainer';
import PressList from './PressList';

const MyNewsList = () => {
    const { subscribedNewsData, selectedPressIdx, selectPressIdx } = useNewsData();
    if(!subscribedNewsData.length) return <NoSubscribed/>

    return (
        <Styled.MyNewsListContainer>
            <PressList subscribedNewsData={subscribedNewsData} selectedPressIdx={selectedPressIdx} selectPressIdx={selectPressIdx}/>
            <NewsContainer subscribedNewsData={subscribedNewsData} selectedPressIdx={selectedPressIdx}/>
        </Styled.MyNewsListContainer>
    );
};

export default MyNewsList;