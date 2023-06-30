import { Outlet } from "react-router-dom";

import { useToast, useUserSession } from "../../hooks";

import { Toast } from "../../components";

const ProtectedLayout = (): JSX.Element => {
  const {
    isToastVisible,
    toast,
    getToastColor,
    showToast,
    hideToast,
    configToast,
  } = useToast();
  useUserSession({ showToast, hideToast, configToast }, 1000);
  return (
    <div>
      ProtectedLayout
      <Outlet />
      <Toast
        type={toast.toastType}
        message={toast.toastMessage}
        toastConfig={{
          isToastVisible,
          getToastColor,
          hideToast,
        }}
      />
    </div>
  );
};

export default ProtectedLayout;
