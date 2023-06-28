/* fuctions */
import { CustomFormProps } from "../../../types";
import { ValuesForm } from "../../../utils";

/* styles */
import { Form, FormTitle, FormBody } from "./CustomForm.style";

const CustomForm = (props: CustomFormProps): JSX.Element => {
  const { children, formTitle, config, formType, handleSubmit, action } = props;
  const valuesForm = new ValuesForm();

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        const newData = valuesForm.setFormValues(formType, data);
        action(newData, config);
      })}
    >
      <FormTitle> {formTitle} </FormTitle>
      <FormBody>{children}</FormBody>
    </Form>
  );
};

export default CustomForm;
