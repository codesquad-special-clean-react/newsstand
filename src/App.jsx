import Header from '@components/Header';
import styled from 'styled-components';

function App() {
  return (
    <NewsStandWrapper>
      <Header />
      <h1>Hello React</h1>
    </NewsStandWrapper>
  );
}

const NewsStandWrapper = styled.main`
  margin: 1em;
`;

export default App;
