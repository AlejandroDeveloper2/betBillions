/* fuctions */
import { CustomFormProps } from "../../../types";

/* styles */
import { Form, FormTitle, FormBody } from "./CustomForm.style";

const CustomForm = (props: CustomFormProps): JSX.Element => {
  const { children, formTitle, handleSubmit, action } = props;

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        action(data);
      })}
    >
      <FormTitle> {formTitle} </FormTitle>
      <FormBody>{children}</FormBody>
    </Form>
  );
};

export default CustomForm;
