import { useState } from "react";

import { RoundFormValues } from "types";

const useGenerateFields = () => {
  const [roundsData, setRoundsData] = useState<RoundFormValues[]>([]);

  const generateDynamicFields = (numberOfRounds: number): void => {
    let rounds = [];
    for (let index = 0; index < numberOfRounds; index++) {
      const element: RoundFormValues = { typeGame: "", award: 0 };
      rounds.push(element);
    }
    setRoundsData(rounds);
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
