import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import { Country, ServerResponse, City } from "types";

class LocationService {
  public async getCountries(): Promise<Country[]> {
    let response: Country[] | null = null;
    const config = {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_COUNTRIES_TOKEN,
        "X-RapidAPI-Host": "city-and-state-search-api.p.rapidapi.com",
      },
    };
    try {
      const axiosClient = getAxiosClient("countriesAPI");
      const { data } = await axiosClient.get<Country[]>("/countries", config);
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async getCitiesPerCountry(country: string): Promise<City[]> {
    let response: City[] | null = null;
    const config = {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_COUNTRIES_TOKEN,
        "X-RapidAPI-Host": "city-and-state-search-api.p.rapidapi.com",
      },
      params: {
        country_name: country,
      },
    };
    try {
      const axiosClient = getAxiosClient("countriesAPI");
      const { data } = await axiosClient.get<City[]>("/states", config);
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }
}

export { LocationService };
