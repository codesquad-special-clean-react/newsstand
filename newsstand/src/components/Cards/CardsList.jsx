import { useState } from "react";
import styled from "styled-components";
import CardsItem from "./CardsItem";

const CardsList = ({ pressList }) => {
  const pressItem = [...pressList].map(item => <CardsItem key={item.id} press={item} />)
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