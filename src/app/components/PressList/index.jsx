import { Button, LI, UL } from 'components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pressListQuery, currentPressState } from '../../state';

const PressList = () => {
  const setCurrentPress = useSetRecoilState(currentPressState);
  const pressList = useRecoilValue(pressListQuery);

  const listItems = pressList.map(({ name, id }) => (
    <LI key={id}>
      <Button variant="ghost" onClick={() => setCurrentPress(name)}>
        {name}
      </Button>
    </LI>
  ));

  return <UL>{listItems}</UL>;
};

export default PressList;
