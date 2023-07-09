import styled from "styled-components";

const PurchaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 5.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--white);
  gap: 2rem;

  @media (min-width: 1000px) {
    align-items: flex-start;
    width: 70%;
    padding-bottom: 1rem;
  }
  button {
    margin: 0 auto;
  }
`;

const PageTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
    }
  }
`;

const PurchaseDetailsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PurchaseCartIndicator = styled.div`
  width: 100%;
  height: 15rem;
  background-color: var(--bg-secondary-color);
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  h2 {
    font-size: 1.2rem;
    color: var(--white);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
`;

const PurchaseDetailsIndicator = styled(PurchaseCartIndicator)`
  background-color: var(--black);
  p {
    font-size: 2.5rem;
    color: var(--green);
    font-weight: bolder;
    text-align: center;
    text-transform: uppercase;
    span {
      font-size: 1.3rem;
      color: var(--green);
      margin-right: 0.5rem;
    }
  }
`;

const CartNumberIndicator = styled.div`
  width: 7rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    padding: 0.2rem 0.5rem;
    background-color: var(--green-two);
    font-size: 1rem;
    color: var(--dark-gray);
    text-align: center;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 5px;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: var(--bg-secondary-color);
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const P = styled.p`
  font-size: 1rem;
  color: var(--bg-secondary-color);
  font-weight: 400;
  text-align: center;
  text-transform: none;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export {
  PurchaseContainer,
  PageTitle,
  PurchaseCartIndicator,
  PurchaseDetailsIndicator,
  PurchaseDetailsContainer,
  CartNumberIndicator,
  Subtitle,
  P,
};
