import * as Styled from './PressList.style';

const PressList = ({ presses, selectedPressIdx, selectPressIdx }) => {
    return (
        <Styled.Ul>
            { presses.map((press, idx) => 
                <Styled.Li 
                    key={idx}
                    isSelected={selectedPressIdx !== idx} 
                    onClick={selectPressIdx.bind(null, idx)}>
                    {press}
                </Styled.Li>) }
        </Styled.Ul>
    );
};

export default PressList;