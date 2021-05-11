import React from 'react';
import styled from "styled-components";

const subscribeButtonNames = {
  SUBSCRIBE: "구독",
  UNSUBSCRIBE: "해지"
}

const CardsItemButtons = ({ id, logoImgUrl, company, subscribe }) => {
  const buttonName = subscribe ? subscribeButtonNames.UNSUBSCRIBE : subscribeButtonNames.SUBSCRIBE
  
  return (
    <CardsItemHoverWrapper>
      <div>{buttonName}</div>
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