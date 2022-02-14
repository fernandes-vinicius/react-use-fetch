import { useEffect, useState } from 'react';

import axios from 'axios';

function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(response.data))
      .finally(() => {
        setIsFetching(false);
      });
  }, [url]);

  return { data, isFetching };
}

export default useFetch;
