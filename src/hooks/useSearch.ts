import { useState, useEffect } from "react";

const useSearch = <T>(listToSearch: T[]) => {
  const [filteredList, setFilteredList] = useState<T[]>(listToSearch);
  const [searchedElement, setSearchedElement] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchedElement(e.target.value);
  };

  useEffect(() => {
    const searchElement = (): void => {
      if (searchedElement === "") {
        setFilteredList(listToSearch);
        return;
      }
      const results = (listToSearch as any[]).filter((item) => {
        return item.toLowerCase().includes(searchedElement.toLowerCase());
      });
      const parsedResults = results as T[];
      setFilteredList(parsedResults);
    };
    searchElement();
  }, [searchedElement, listToSearch]);

  return {
    searchedElement,
    filteredList,
    handleChange,
  };
};

export default useSearch;
