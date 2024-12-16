import styled, { css } from 'styled-components';

export const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem; /* 카드 간 간격 */
  margin: 2.4rem 6.4rem 0rem 6.4rem;
  justify-content: center; /* 카드 중앙 정렬 */
  align-items: start;

  /* 반응형 그리드로. */
  ${(props) =>
    props.theme.media.ph(css`
      grid-template-columns: 1fr;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      grid-template-columns: repeat(2, 1fr);
    `)}
`;
