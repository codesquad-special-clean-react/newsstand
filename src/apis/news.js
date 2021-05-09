const URL = "http://localhost:3001/news";

export const fetchNewsList = () => {
  return fetch(URL);
};
