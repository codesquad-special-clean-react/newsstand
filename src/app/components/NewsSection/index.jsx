import { useRecoilValue } from 'recoil';
import { newsListQuery } from '../../state';

const NewsSection = () => {
  const {
    company,
    logoImgUrl,
    newslist,
    thumbnews: { imageUrl, text },
  } = useRecoilValue(newsListQuery);

  return (
    <section>
      <img src={logoImgUrl} alt={`언론사 ${company}의 로고`} />

      <figure>
        <img src={imageUrl} alt={text} />
        <figcaption>{text}</figcaption>
      </figure>

      <ul>
        {newslist.map((title, tempKey) => (
          <li key={tempKey}>{title}</li>
        ))}
      </ul>
    </section>
  );
};
export default NewsSection;
