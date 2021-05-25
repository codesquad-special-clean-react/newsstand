import * as Styled from './Press.style';
import useNewsData from '../../hooks/useNewsData';
import usePress from '../../hooks/usePress';
import {GridContainer} from '../common/GridContainer.style';
import GridItem from '../common/GridItem';
import LogoImage from '../common/LogoImage';

const HoveredPress = ({isSubscribed, handleSubscribe}) => {
  return <Styled.HoveredPressContainer>
    <Styled.Button onClick={handleSubscribe}>{ isSubscribed ? '해지' : '구독' }</Styled.Button>
    <Styled.Button>기사보기</Styled.Button>
  </Styled.HoveredPressContainer>;
};

const Press = () => {
  const {newsList, isSubscribed} = useNewsData(18);
  const {hoveredPressOrders, setHoveredPressOrder, handleSubscribe} = usePress();

  return (
    <GridContainer>
      {
        newsList.map(({logoImgUrl, id: pressId}, order) => {
          return (
            <GridItem
              key={order}
              onMouseOver={setHoveredPressOrder.bind(null, order)}
              onMouseOut={setHoveredPressOrder.bind(null, null)}>
              {
                hoveredPressOrders !== order ?
                <LogoImage logoUrl={ logoImgUrl }/> :
                 <HoveredPress
                   isSubscribed={(isSubscribed(pressId))}
                   handleSubscribe={handleSubscribe.bind(null, pressId)}/>
              }
            </GridItem>
          );
        })
      }
    </GridContainer>
  );
};

export default Press;
