// basic
import { useState, useEffect } from 'react';

// rq
import { QueryFunction, useQuery } from '@tanstack/react-query';

const useDebounceQuery = (
  params: any[],
  request: QueryFunction<unknown, any[]>,
  debounce: number,
  options?: object
): any => {
  const [newParams, setNewParams] = useState(params);
  const stringify = (obj: object) => JSON.stringify(obj);

  useEffect(() => {
    let timerID: NodeJS.Timeout;

    if (stringify(params) !== stringify(newParams)) {
      timerID = setTimeout(() => setNewParams(params), debounce);
    }

    return () => clearInterval(timerID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return useQuery(newParams, request, options);
};

export default useDebounceQuery;
