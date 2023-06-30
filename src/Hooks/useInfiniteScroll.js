import { useEffect, useState } from "react";

export const useInfiniteScroll = (data, dataNum) => {
  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setPageData(data?.slice(0, dataNum) || []);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [data, dataNum]);

  return { pageData, isLoading: isLoading && !!data?.length };
};
