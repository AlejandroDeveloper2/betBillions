import { Image } from "../../components";

import { PageNotFound } from "../../assets";

import { FormContainer } from "../../styles/GlobalStyles.style";
import { Title } from "./Page404.style";

const Page404 = (): JSX.Element => {
  return (
    <FormContainer width={40}>
      <Image
        source={PageNotFound}
        alt={"Page404"}
        dimensions={{
          width: 600,
          height: 400,
        }}
      />
      <Title>Pagina no encontrada!</Title>
    </FormContainer>
  );
};

export default Page404;
