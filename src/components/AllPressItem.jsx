import { useState } from 'react';

function AllPressItemOnHover({ id, isSubscribe, toggleSubscribe }) {
  return (
    <div>
      <button onClick={toggleSubscribe}>{isSubscribe ? '해지' : '구독'}</button>
      <button>기사보기</button>
    </div>
  );
}

export default function AllPressItem({
  id,
  company,
  isSubscribe,
  logoImgUrl,
  toggleSubscribe,
}) {
  const [isHover, setHover] = useState(false);

  const getPressItemView = () => {
    if (!isHover) {
      return <img src={logoImgUrl} alt={company} />;
    }
    return (
      <AllPressItemOnHover
        id={id}
        isSubscribe={isSubscribe}
        toggleSubscribe={() => toggleSubscribe(id)}
      />
    );
  };
  const pressItemView = getPressItemView();

  return (
    <div
      style={{ height: '3rem' }}
      onMouseEnter={() => setHover(() => true)}
      onMouseLeave={() => setHover(() => false)}
    >
      {pressItemView}
    </div>
  );
}
