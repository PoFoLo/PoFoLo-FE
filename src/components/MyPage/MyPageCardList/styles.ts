import styled, { css } from 'styled-components';

export const CardListColorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray5};
`;

export const CardListContainer = styled.div<{ isPortfolioTab: boolean }>`
  width: 100%;
  max-width: 131.2rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  display: grid;
  grid-template-columns: ${(props) => (props.isPortfolioTab ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')};
  gap: 2.4rem;
  padding: 0 0 6.4rem 0;
  background-color: ${(props) => props.theme.colors.gray5};

  /* 반응형 처리 */
  ${(props) =>
    props.theme.media.ph(css`
      grid-template-columns: 1fr;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      grid-template-columns: repeat(2, 1fr);
    `)}
`;
