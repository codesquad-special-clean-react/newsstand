import AllPressItem from "./AllPressItem.jsx";

export default function AllPress({ press }) {
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
