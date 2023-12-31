import styled from "styled-components";

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--white);
  gap: 2rem;
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      font-size: 1rem;
      color: var(--dark-gray);
      font-weight: normal;
      text-transform: uppercase;
      vertical-align: middle;
    }
  }

  @media (min-width: 768px) {
    h1 {
      span {
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1000px) {
    width: 100%;
    align-items: flex-start;
    flex-direction: row-reverse;
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
      span {
        font-size: 1.5rem;
      }
    }
    padding-bottom: 1rem;
  }
`;

const Datetext = styled.p`
  font-size: 1.7rem;
  color: var(--white);
  text-align: center;
  font-weight: normal;
  @media (min-width: 768px) {
    font-size: 2.2rem;
    text-align: left;
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    justify-content: space-between;
  }
`;

export { PanelContainer, Datetext, Section };
