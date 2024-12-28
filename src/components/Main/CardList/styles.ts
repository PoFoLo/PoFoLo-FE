import styled, { css } from 'styled-components';

export const CardListContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;

export const CardList = styled.div`
  width: 100%;
  max-width: 131.2rem;
  @media (max-width: 1440px) {
    margin: 2.6rem 6.4rem 0rem 6.4rem;
    width: calc(100% - 11.2rem);
  }

  margin-top: 2.6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem; /* 카드 간 간격 */

  justify-content: center; /* 카드 중앙 정렬 */
  align-items: center;

  /* 반응형 그리드로. */
  ${(props) =>
    props.theme.media.ph(css`
      grid-template-columns: 1fr;
      margin: 0rem 2.4rem 0rem 2rem;
      width: calc(100% - 4rem);
      flex: 1 0 0;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin: 0rem 2rem 0rem 2rem;
      width: calc(100% - 4rem);
      flex: 1 0 0;
    `)}
`;
