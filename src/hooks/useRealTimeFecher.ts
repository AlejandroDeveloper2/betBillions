import useSWR from "swr";

import { TokenAuth } from "@utils/index";

const useRealTimeFecher = <T>(
  endpoint: string,
  fecher: (token: string) => Promise<T>
) => {
  const tokenAuth = new TokenAuth();
  const token = tokenAuth.getToken() ?? "";

  const { data, isLoading } = useSWR(endpoint, () => fecher(token), {
    refreshInterval: 100,
  });

  return {
    data,
    isLoading,
  };
};

export default useRealTimeFecher;
