/* eslint-disable @typescript-eslint/no-explicit-any */
import { Location } from "react-router-dom";

import { FormType } from "../types";

class ValuesForm {
  public setFormValues(formType: FormType, data: any) {
    let newFormData: any | null = null;
    if (formType === "register") {
      newFormData = { ...data };
      delete newFormData?.confirmPassword;
      return newFormData;
    }
    return data;
  }
}

const getInvitationLink = (location: Location): string | undefined => {
  const user = location.pathname.split("/")[2];
  const invitationLink = user
    ? `https://betbillions.com.co/${user}`
    : undefined;
  return invitationLink;
};

export { ValuesForm, getInvitationLink };
