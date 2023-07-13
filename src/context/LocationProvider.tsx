import {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import { City, Country, LocationContextType, ProviderProps } from "types";

/*services*/
import { LocationService } from "@services/location.service";

const LocationContext = createContext<LocationContextType>(
  {} as LocationContextType
);

const locationService = new LocationService();

const LocationProvider = ({ children }: ProviderProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const getCountries = useCallback(async () => {
    try {
      const res = await locationService.getCountries();
      setCountries(
        res.sort(function (a, b) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        })
      );
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      console.log(errorMessage);
    }
  }, []);

  const getCitiesPerCountry = useCallback(async (country: string) => {
    try {
      const res = await locationService.getCitiesPerCountry(country);
      setCities(
        res.sort(function (a, b) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        })
      );
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      console.log(errorMessage);
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  const value = useMemo(
    () => ({
      countries,
      cities,
      getCountries,
      getCitiesPerCountry,
    }),
    [countries, cities, getCountries, getCitiesPerCountry]
  );

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider };
export default LocationContext;
