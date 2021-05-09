import { useState } from "react";
import styled from "styled-components";
import CardsItemButtons from "./CardsItemButtons"
import CardsImage from "./CardsImage"

const CardsItem = ({ press }) => {
  const [hoverFlag, setHoverFlag] = useState(false)
  const { id, company, logoImgUrl } = press

  const toggleHoverFlag = (type) => setHoverFlag(type)

  const cardHoverButton = ({ props }) => {
    const CardsComponent = hoverFlag ? CardsItemButtons : CardsImage
    return <CardsComponent {...props} />
  }

  return (
    <CardsItemWrapper onMouseOver={() => toggleHoverFlag(true)} onMouseOut={() => toggleHoverFlag(false)}>
      {
        cardHoverButton({
          props: { id, logoImgUrl, company }
        })
      }
    </CardsItemWrapper>
  )
}

const CardsItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #dbdee2;
  display: flex;
  justify-content: center;
  align-items: center;
`



export default CardsItem;