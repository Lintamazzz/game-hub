import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          ...requestConfig,
          signal: controller.signal,
        })
        .then((res) => {
          // console.log(res);
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          // console.log(err);
          setError(err.message);
          setLoading(false);
        });

      return () => {
        //   console.log("cleanup, controller: ", controller);
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
