import styled from 'styled-components';

export const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 최소 크기와 최대 크기를 설정 */
  gap: 2.4rem; /* 카드 간 간격 */
  padding: 2rem;
  justify-content: center; /* 카드 중앙 정렬 */
  align-items: start;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr); /* 1440px 이상에서 4개 */
  }

  @media (max-width: 1439px) and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 1024px 이상 ~ 1439px 이하에서 3개 */
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 768px 이상 ~ 1023px 이하에서 2개 */
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* 767px 이하에서 1개 */
  }
`;
