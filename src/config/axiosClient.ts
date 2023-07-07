import axios, { AxiosInstance } from "axios";

import { ApiName } from "types";

const getAxiosClient = (apiName: ApiName): AxiosInstance => {
  const axiosClient: AxiosInstance = axios.create({
    baseURL:
      apiName === "countriesAPI"
        ? import.meta.env.VITE_COUNTRIES_API_URL
        : apiName === "ipAddressAPI"
        ? import.meta.env.VITE_IP_ADDRESS_API_URL
        : apiName === "betBillionsAPI"
        ? import.meta.env.VITE_BACKEND_URL
        : import.meta.env.VITE_CLOUDINARY_API_URL,
  });
  return axiosClient;
};

export default getAxiosClient;
