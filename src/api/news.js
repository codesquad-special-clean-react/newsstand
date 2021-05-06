import { API } from '@utils/api';
import { NEWS_URL } from '@utils/constant';

export const getNews = async () => {
  try {
    const result = await API.get(NEWS_URL);

    if (result.ok) {
      return result.json();
    }

    throw new Error(`NAVER NEWS GET ERROR: ${result.status}`);
  } catch (error) {
    console.error(`NAVER NEWS GET ERROR: ${error}`);
  }
};
