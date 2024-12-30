import styled, { css } from 'styled-components';

export const CardListColorContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  ${(props) =>
    props.theme.media.pc(css`
      background-color: #f8f8f8;
    `)}
`;

export const CardListContainer = styled.div<{ $isPortfolioTab: boolean }>`
  width: 100%;
  height: 100%;
  max-width: 131.2rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  display: grid;
  grid-template-columns: ${(props) =>
    props.$isPortfolioTab ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  gap: 2.4rem;
  padding: 0 0 3rem 0;

  ${(props) =>
    props.theme.media.ph(css`
      margin: 0rem 2rem 0rem 2rem;
      width: calc(100% - 4rem);
      grid-template-columns: 1fr;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin: 0rem 2rem 0rem 2rem;
      width: calc(100% - 4rem);
      grid-template-columns: repeat(2, 1fr);
    `)}
`;

export const CardContainer = styled.div`
  height: fit-content;
`;
