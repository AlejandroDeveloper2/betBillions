/* fuctions */
import { CustomFormProps } from "types";
import { ValuesForm } from "@utils/index";

/* styles */
import { Form, FormTitle, FormBody } from "./CustomForm.style";

const CustomForm = (props: CustomFormProps): JSX.Element => {
  const { children, formTitle, config, formType, handleSubmit, action, reset } =
    props;
  const valuesForm = new ValuesForm();

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        const newData = valuesForm.setFormValues(formType, data);
        action(newData, config, reset);
      })}
    >
      <FormTitle> {formTitle} </FormTitle>
      <FormBody>{children}</FormBody>
    </Form>
  );
};

export default CustomForm;
