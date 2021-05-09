const API_ENDPOINT = "http://localhost:3001";

const URL = {
  NEWS: "/news",
  MY_NEWS: "/mynews",
};

const postMesageForm = (data, methodType) => {
  return {
    method: methodType,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const deleteMessageForm = () => {
  return {
    method: "DELETE",
  };
};

const request = async (url, message = null) => {
  try {
    const res = await fetch(url, message);
    if (!res.ok) {
      throw new Error("Error");
    }
    return await res.json();
  } catch (e) {
    throw new Error(`Error: ${e.message}`);
  }
};

export const getNewsData = async () => {
  const newsData = await request(`${API_ENDPOINT}${URL.NEWS}`);
  return newsData;
};
