import useNewsData from '../../hooks/useNewsData';
import NoSubscribed from '../common/NoSubscribed';
import * as Styled from './MyNewsList.style';
import NewsContainer from './NewsContainer';
import PressList from './PressList';

const MyNewsList = () => {
  const {subscribedNewsList, selectedPressIdx, selectPressIdx} = useNewsData();
  if (!subscribedNewsList.length) return <NoSubscribed/>;

  return (
    <Styled.MyNewsListContainer>
      <PressList
        subscribedNewsList={subscribedNewsList}
        selectedPressIdx={selectedPressIdx}
        selectPressIdx={selectPressIdx}/>
      <NewsContainer subscribedNewsList={subscribedNewsList} selectedPressIdx={selectedPressIdx}/>
    </Styled.MyNewsListContainer>
  );
};

export default MyNewsList;
