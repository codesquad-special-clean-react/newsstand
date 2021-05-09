const URL = "http://localhost:3001/news";

export const fetchNewsList = () => {
  return fetch(URL);
};

export const patchNews = ({ newsId, params }) => {
  return fetch(`${URL}/${newsId}`, {
    method: "PATCH",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
