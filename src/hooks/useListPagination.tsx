import { useState, useEffect } from "react";

import { Pagination } from "@components/index";

function useListPagination<T>(list: T[]) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [records, setRecords] = useState<T[]>([]);
  const [next, setNext] = useState<boolean>(false);
  const [prev, setPrev] = useState<boolean>(false);
  const [totalRecordsPerPage] = useState<number>(10);
  const [totalPages] = useState<number>(
    Math.ceil(list.length / totalRecordsPerPage)
  );
  const indexOfLastRecord = currentPage * totalRecordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - totalRecordsPerPage;

  const paginate = (): void => {
    if (currentPage > 1) {
      setPrev(true);
    } else {
      setPrev(false);
    }
    if (currentPage < totalPages) {
      setNext(true);
    } else {
      setNext(false);
    }
  };

  const goBack = (): void => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const goNext = (): void => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const getPaginationIndicators = () => {
    return {
      presented: currentPage * totalRecordsPerPage - 10,
      of: currentPage * totalRecordsPerPage,
      total: list.length,
    };
  };

  const PaginationComponent = (): JSX.Element => {
    return (
      <Pagination
        config={{
          next,
          prev,
          goBack,
          goNext,
          getPaginationIndicators,
        }}
      />
    );
  };

  useEffect(() => {
    let active = true;
    const setRecordsPerPage = (): void => {
      const recordsPerPage = list.slice(indexOfFirstRecord, indexOfLastRecord);
      setRecords(recordsPerPage);
      paginate();
      window.scrollTo({ top: 1800, behavior: "smooth" });
    };
    if (active) {
      setRecordsPerPage();
    }

    return () => {
      active = false;
    };
  }, [currentPage, indexOfFirstRecord, indexOfLastRecord, list]);

  return {
    records,
    PaginationComponent,
  };
}

export default useListPagination;
