import { useRecoilValue } from 'recoil';
import styled from "styled-components";
import { mySubscribeNews } from '../../atoms/myNewsState';
import CardsItem from "./CardsItem";

const CardsList = () => {
  const news = useRecoilValue(mySubscribeNews)
  const pressItem = [...news].map(item => <CardsItem key={item.id} press={item} />)
  
  return (
    <CardsListWrapper>
      {pressItem}
    </CardsListWrapper>
  )
}

const CardsListWrapper = styled.div`
  height: calc(100% - 56px);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

export default CardsList;