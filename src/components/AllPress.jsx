import AllPressItem from './AllPressItem.jsx';
import { useRecoilState } from 'recoil';
import { pressState } from '../store/press.js';
import APIs from '../apis/APIs.js';

export default function AllPress() {
  const [press, setPress] = useRecoilState(pressState);

  const toggleSubscribe = async (pressId) => {
    await APIs.toggleSubscribe({ pressId });
    const press = await APIs.getPress();
    setPress(press);
  };

  const AllPressItems = press.map(
    ({ id, company, isSubscribe, logoImgUrl }) => {
      return (
        <AllPressItem
          key={`press-item-${id}`}
          id={id}
          company={company}
          isSubscribe={isSubscribe}
          logoImgUrl={logoImgUrl}
          toggleSubscribe={toggleSubscribe}
        />
      );
    }
  );

  return <main>{AllPressItems}</main>;
}
