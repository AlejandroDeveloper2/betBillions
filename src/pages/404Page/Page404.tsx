import { Image } from "@components/index";

import { PageNotFound } from "@assets/index";

import { FormContainer } from "@styles/GlobalStyles.style";
import { Title, Figure } from "./Page404.style";

const Page404 = (): JSX.Element => {
  return (
    <FormContainer width={40}>
      <Figure>
        <Image
          source={PageNotFound}
          alt={"Page404"}
          size={{ lg: 100, md: 100, sm: 100 }}
        />
      </Figure>
      <Title>Pagina no encontrada!</Title>
    </FormContainer>
  );
};

export default Page404;
