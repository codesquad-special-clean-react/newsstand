import React from 'react';

const CardsImage = ({ id, logoImgUrl, company }) => {
  return <img data-press-id={id} src={logoImgUrl} alt={`press name ${company}`} />
}

export default CardsImage;