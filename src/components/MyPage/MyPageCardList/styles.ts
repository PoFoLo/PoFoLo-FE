import styled, { css } from 'styled-components';

export const CardListContainer = styled.div<{ isPortfolioTab: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.isPortfolioTab ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')};
  gap: 2.4rem;
  margin: 0 6.4rem 0;
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
