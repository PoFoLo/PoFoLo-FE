import styled from 'styled-components';

export const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개의 카드 */
  gap: 2.4rem; /* 카드 간 간격 */
  padding: 2rem;
  justify-content: center; /* 카드 중앙 정렬 */
  align-items: start;
`;
