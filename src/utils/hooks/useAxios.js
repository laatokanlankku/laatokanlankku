import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {
  const [query, setQuery] = useState({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setIsError(false);

    // If the query is not empty, otherwise: "TypeError: Cannot read property 'protocol' of undefined"
    if (Object.keys(query).length) {
      try {
        const result = await axios(query);
        setData(result.data);
        console.log(result.data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }

      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(query);
    if (Object.keys(query).length) getData();
  }, [query]);

  const doGet = queryParameters => {
    setQuery(queryParameters);
  };

  return [data, isLoading, isError, doGet];
};

export default useAxios;
