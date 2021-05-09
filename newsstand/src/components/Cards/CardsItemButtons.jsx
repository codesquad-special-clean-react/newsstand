import React from 'react';
import styled from "styled-components";

const CardsItemButtons = () => {
  return (
    <CardsItemHoverWrapper>
      <div>구독</div>
      <div>기사보기</div>
    </CardsItemHoverWrapper>
  )
}

const CardsItemHoverWrapper = styled.div`
  display: flex;

  div {
    cursor: pointer;
  }
`

export default CardsItemButtons;