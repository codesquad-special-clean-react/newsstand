import * as Styled from './NewsList.style';

const NewsList = ({ newsList }) => {
    return (
        <Styled.Ul>
            {newsList.map((news, idx) => <Styled.Li key={`news_${idx}`}>{news}</Styled.Li>)}
        </Styled.Ul>
    );
};

export default NewsList;