import { useState } from "react";

const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(Boolean(e.target.value));
    console.log(isChecked);
  };

  return {
    isChecked,
    onChange,
  };
};

export default useCheckbox;
