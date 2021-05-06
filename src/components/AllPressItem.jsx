import { useState } from "react";

function AllPressItemOnHover() {
  return (
    <div>
      <button>구독</button>
      <button>기사보기</button>
    </div>
  );
}

export default function AllPressItem({ id, company, isSubscribe, logoImgUrl }) {
  const [isHover, setHover] = useState(false);

  const getPressItemView = () => {
    if (!isHover) {
      return <img src={logoImgUrl} alt={company} />;
    }
    return <AllPressItemOnHover />;
  };
  const pressItemView = getPressItemView();

  return (
    <div
      style={{ height: "3rem" }}
      onMouseEnter={() => setHover(() => true)}
      onMouseLeave={() => setHover(() => false)}
    >
      {pressItemView}
    </div>
  );
}
