import useNewsData from '../../hooks/useNewsData';
import GridContainer from '../common/GridContainer';
import GridItem from '../common/GridItem';
import LogoImage from '../common/LogoImage';
import NoSubscribed from '../common/NoSubscribed';

const MyNewsCard = () => {
  const {subscribedNewsList} = useNewsData(18);
  if (!subscribedNewsList.length) return <NoSubscribed/>;

  return (
    <GridContainer>
      {
        subscribedNewsList.map(({logoImgUrl}, idx) =>
          <GridItem key={idx}>
            <LogoImage logoUrl={logoImgUrl}/>
          </GridItem>)
      }
    </GridContainer>
  );
};

export default MyNewsCard;
