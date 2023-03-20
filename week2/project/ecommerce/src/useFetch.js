import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    try {
      setLoading('loading ..');
      setError(null);
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError('An error occurred. Awkward..');
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
