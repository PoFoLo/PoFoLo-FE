import styled, { css } from 'styled-components';

export const Card = styled.div`
  max-width: 41.6rem; /* 최대 너비 설정 */
  width: 100%; /* 화면 크기에 따라 줄어듦 */
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(css`
      max-width: none;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      max-width: none;
    `)}
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

  ${(props) =>
    props.theme.media.ph(css`
      color: #000;
      font-family: 'Pretendard';
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 22.5px */
      letter-spacing: 0.038px;

      height: 2.3rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      color: #000;
      font-family: 'Pretendard';
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 22.5px */
      letter-spacing: 0.038px;

      height: 2.3rem;
    `)}
`;

export const ReactionContainer = styled.div`
  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  height: 2.6rem;
  padding-top: 0.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.375rem;

  ${(props) =>
    props.theme.media.ph(css`
      height: 1.95rem;
      padding-top: 0.15rem;
      gap: 0.281rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 1.95rem;
      padding-top: 0.15rem;
      gap: 0.281rem;
    `)}
`;

export const ReactionIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  align-items: center;
  margin-right: 0.188rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 1.8rem;
      height: 1.8rem;

      margin-right: 0.141rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 1.8rem;
      height: 1.8rem;

      margin-right: 0.141rem;
    `)}
`;

export const ReactionLetter = styled.span`
  color: rgba(0, 0, 0, 0.5);
  ${(props) => props.theme.fonts.caption3};

  height: 2rem;
  display: flex;
  align-items: center;
  margin-right: 0.4rem;

  ${(props) =>
    props.theme.media.ph(css`
      color: rgba(0, 0, 0, 0.5);
      font-family: 'Pretendard';
      font-size: 1.05rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 14.7px */
      letter-spacing: 0.0026rem;

      height: 1.5rem;
      margin-right: 0.3rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      color: rgba(0, 0, 0, 0.5);
      font-family: 'Pretendard';
      font-size: 1.05rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 14.7px */
      letter-spacing: 0.0026rem;

      height: 1.5rem;
      margin-right: 0.3rem;
    `)}
`;

export const PortfolioCard = styled.div`
  max-width: 64rem; /* 최대 너비 설정 */
  width: 100%; /* 화면 크기에 따라 줄어듦 */
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const PortfolioCardImg = styled.img`
  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  aspect-ratio: 16 / 9; /* 비율 유지 */
  border-radius: 11.25px;
  object-fit: cover; /* 비율 유지하면서 넘치는 부분은 잘림 */
`;
