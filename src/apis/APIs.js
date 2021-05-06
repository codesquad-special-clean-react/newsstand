const API_END_POINT = process.env.REACT_APP_API_END_POINT;

const defaultAPIs = async (method, url, data) => {
  let config = { method };
  if (method === "POST" || method === "PUT") {
    config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }

  try {
    const response = await fetch(`${API_END_POINT}${url}`, config);
    if (!response.ok) {
      throw new Error("response is not OK");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const GET = (url) => defaultAPIs("GET", url);
const POST = (url, data) => defaultAPIs("POST", url, data);
const PUT = (url, data) => defaultAPIs("PUT", url, data);
const DELETE = (url) => defaultAPIs("DELETE", url);

const APIs = {
  async getPress() {
    return await GET("/press");
  },
};

export default APIs;
