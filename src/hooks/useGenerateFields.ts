import { useState } from "react";

import { RoundFormValues } from "types";

const useGenerateFields = (numberOfRounds: number) => {
  const [roundsData, setRoundsData] = useState<RoundFormValues[]>(() =>
    Array<RoundFormValues>(numberOfRounds).fill({
      typeGame: "",
      award: 0,
    })
  );

  const generateDynamicFields = (numberOfRounds: number): void => {
    setRoundsData(() => {
      return Array<RoundFormValues>(numberOfRounds).fill({
        typeGame: "",
        award: 0,
      });
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number,
    inputName: string
  ) => {
    const inputValue = e.target.value;
    setRoundsData((prevData) => {
      const updatedData: RoundFormValues[] = prevData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [inputName]: inputValue,
          };
        }
        return item;
      });
      return updatedData;
    });
  };

  return {
    roundsData,
    handleChange,
    generateDynamicFields,
  };
};

export default useGenerateFields;
