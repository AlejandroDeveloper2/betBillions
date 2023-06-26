import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkVariant = styled(Link)`
  color: var(--pink);
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: capitalize;
  text-decoration: none;
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 0.6rem;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  background-color: var(--white);
  padding: 3rem 2rem;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
  @media (min-width: 768px) {
    width: 20rem;
    border-radius: 1rem;
  }
`;

export { Links, LinkVariant, FormContainer };
