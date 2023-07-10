import { useState } from "react";

const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (): void => {
    setIsChecked(!isChecked);
  };

  return {
    isChecked,
    onChange,
  };
};

export default useCheckbox;
