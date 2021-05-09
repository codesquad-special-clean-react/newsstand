const { useState } = require("react");
const { useEffect } = require("react");
export const useFetch = ({ fetch }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch()
      .then((response) => {
        if (!response.ok) {
          setError(response.statusText);
          return [];
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetch]);

  return { data, error, loading };
};
