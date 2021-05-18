const BASE_URL = 'http://localhost:3001/news';

export const newsFetcher = {
  get: async () => {
    try {
      const response = await fetch(BASE_URL);
      if (response.error) {
        throw response.status;
      }
      return response.json();
    } catch (err) {
      console.error('newsFetcher get Error', err);
      return false;
    }
  },
};
