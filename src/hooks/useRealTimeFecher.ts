import useSWR from "swr";

import { TokenAuth } from "@utils/index";

const useRealTimeFecher = <T>(
  endpoint: string,
  fecher: (token: string, { ...args }?) => Promise<T>,
  refreshInterval: number | null = 100
) => {
  const tokenAuth = new TokenAuth();
  const token = tokenAuth.getToken() ?? "";

  const { data, isLoading } = useSWR(
    endpoint,
    () => fecher(token),
    refreshInterval !== null
      ? {
          refreshInterval,
        }
      : {}
  );

  return {
    data,
    isLoading,
  };
};

export default useRealTimeFecher;
