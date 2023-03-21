import { useState } from "react";
import { useQuery } from "react-query";

const useDataFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data, error, refetch } = useQuery(url, async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  });

  return { data, isLoading, isError, refetch };
};

export default useDataFetch;
