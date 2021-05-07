import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { Flex } from './components/commons';
import Box from './components/commons/Box';
import Header from './components/Header';

const newsListQuery = selector({
  key: 'newList',
  get: async ({ get }) => {
    const response = await fetch('/news');
    const newsList = await response.json();
    return newsList;
  },
});

const pressState = atom({
  key: 'currentPress',
  default: 'SBS',
});

const pressListSelector = selector({
  key: 'pressList',
  get: ({ get }) => {
    const newsList = get(newsListQuery);

    const pressList = newsList.map((press) => ({
      id: press.id,
      name: press.company,
    }));
    return pressList;
  },
});

const singlePressNewsListSelector = selector({
  key: 'singlePressNewsList',
  get: ({ get }) => {
    const press = get(pressState);
    const newsList = get(newsListQuery);
    return newsList.find((news) => news.company === press);
  },
});

const App = () => {
  const [press, setPress] = useRecoilState(pressState);
  const pressList = useRecoilValue(pressListSelector);
  const {
    id,
    company,
    logoImgUrl,
    newslist,
    thumbnews: { imageUrl, text },
  } = useRecoilValue(singlePressNewsListSelector);

  return (
    <Box>
      <Header />
      <div>
        {JSON.stringify(press)}
        <Flex bg="grey">
          <ul>
            {pressList.map(({ name, id }) => (
              <li>
                <button key={id} onClick={() => setPress(name)}>
                  {name}
                </button>
              </li>
            ))}
          </ul>
          <section>
            <img src={logoImgUrl} alt={`언론사 ${company}의 로고`} />

            <figure>
              <img src={imageUrl} alt={text} />
              <figcaption>{text}</figcaption>
            </figure>

            <ul>
              {newslist.map((title) => (
                <li>{title}</li>
              ))}
            </ul>
          </section>
        </Flex>
      </div>
    </Box>
  );
};

export default App;
