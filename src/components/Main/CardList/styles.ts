import styled, { css } from 'styled-components';

export const CardListContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardList = styled.div`
  width: 100%;
  max-width: 131.2rem;
  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  padding: 2.6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem; /* 카드 간 간격 */

  justify-content: center; /* 카드 중앙 정렬 */
  align-items: start;

  /* 반응형 그리드로. */
  ${(props) =>
    props.theme.media.ph(css`
      grid-template-columns: 1fr;
      max-width: 32rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      grid-template-columns: repeat(2, 1fr);
      max-width: 79.4rem;
      gap: 2rem;
    `)}
`;
