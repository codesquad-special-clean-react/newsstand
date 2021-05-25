import * as Styled from './PressList.style';

const PressList = ({subscribedNewsList, selectPressIdx, selectedPressIdx}) => {
  return (
    <Styled.Ul>
      { subscribedNewsList.map(({company, id}) =>
        <Styled.Li
          key={id}
          isSelected={selectedPressIdx !== id}
          onClick={selectPressIdx.bind(null, id)}>
          {company}
        </Styled.Li>) }
    </Styled.Ul>
  );
};

export default PressList;
