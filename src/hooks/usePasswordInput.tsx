import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const usePasswordInput = (type: "text" | "password" | "number") => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePassVisibility = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getPasswordVisibility = (): "password" | "text" | "number" => {
    if (type === "password") {
      const inputType = isPasswordVisible ? "text" : "password";
      return inputType;
    }
    return type;
  };

  const PassIcon = (): JSX.Element | null => {
    if (type === "password") {
      const IconPass = isPasswordVisible ? (
        <AiFillEyeInvisible
          color="var(--dark-gray)"
          style={{ fontSize: "1.2rem", cursor: "pointer" }}
          onClick={togglePassVisibility}
        />
      ) : (
        <AiFillEye
          color="var(--dark-gray)"
          style={{ fontSize: "1.2rem", cursor: "pointer" }}
          onClick={togglePassVisibility}
        />
      );
      return IconPass;
    }
    return null;
  };

  return {
    getPasswordVisibility,
    PassIcon,
  };
};

export default usePasswordInput;
