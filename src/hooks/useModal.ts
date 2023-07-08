import { useState } from "react";

const useModal = <T>() => {
  const [data, setData] = useState<T | undefined>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const showModal = (param?: T): void => {
    setData(param);
    setModalVisible(true);
  };

  const hideModal = (delay = 0): void => {
    setTimeout(() => {
      setModalVisible(false);
    }, delay);
  };

  return {
    data,
    isModalVisible,
    showModal,
    hideModal,
  };
};

export default useModal;
