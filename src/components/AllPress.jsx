import AllPressItem from "./AllPressItem.jsx";
import { useRecoilValue } from "recoil";
import { pressState } from "../store/press.js";

export default function AllPress() {
  const press = useRecoilValue(pressState);

  const AllPressItems = press.map(
    ({ id, company, isSubscribe, logoImgUrl }) => {
      return (
        <AllPressItem
          key={`press-item-${id}`}
          id={id}
          company={company}
          isSubscribe={isSubscribe}
          logoImgUrl={logoImgUrl}
        />
      );
    }
  );

  return <main>{AllPressItems}</main>;
}
