import styled from 'styled-components';

export const Card = styled.div`
  max-width: 41.6rem; /* 최대 너비 설정 */
  width: 100%; /* 화면 크기에 따라 줄어듦 */
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImg = styled.img`
  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  aspect-ratio: 16 / 9; /* 비율 유지 */
  border-radius: 11.25px;
  object-fit: cover; /* 비율 유지하면서 넘치는 부분은 잘림 */
`;

export const ProjectName = styled.div`
  color: #000;
  ${(props) => props.theme.fonts.subhead2};

  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  height: 3rem;
  text-align: left;
  margin-top: 1.2rem;
`;

export const ReactionContainer = styled.div`
  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  height: 2.6rem;
  padding-top: 0.2rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.375rem;
`;

export const ReactionIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  align-items: center;
  margin-right: 0.188rem;
`;

export const ReactionLetter = styled.span`
  color: rgba(0, 0, 0, 0.5);
  ${(props) => props.theme.fonts.caption3};

  height: 2rem;
  display: flex;
  align-items: center;
  margin-right: 0.4rem;
`;

export const PortfolioCard = styled.div`
  max-width: 41.6rem; /* 최대 너비 설정 */
  width: 100%; /* 화면 크기에 따라 줄어듦 */
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioCardImg = styled.img`
  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  aspect-ratio: 16 / 9; /* 비율 유지 */
  border-radius: 11.25px;
  object-fit: cover; /* 비율 유지하면서 넘치는 부분은 잘림 */
`;
