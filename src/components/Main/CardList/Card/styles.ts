import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%; /* 화면 크기에 따라 줄어듦 */
  //max-width: 31rem; /* 최대 너비 설정 */
  //max-height: 25.3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(css`
      max-width: 100%;
      max-height: 100%;
      flex: 1 0 0;
    `)}
  ${(props) =>
    props.theme.media.tab(css`
      flex: 1 0 0;
    `)};
`;

export const Image = styled.img`
  width: 100%; /* 부모 요소 'Card'의 크기를 따름 */
  aspect-ratio: 16 / 9; /* 비율 유지 */
  border-radius: 0.8rem;
  object-fit: cover; /* 비율 유지하면서 넘치는 부분은 잘림 */

  ${(props) =>
    props.theme.media.ph(css`
      border-radius: 0.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      border-radius: 0.6rem;
    `)}
`;

export const MemberName = styled.div`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.caption3};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  height: 2rem;
  margin-top: 1.2rem;
  text-align: left;

  ${(props) =>
    props.theme.media.ph(css`
      height: 1.7rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 1.7rem;
    `)}
`;

export const ProjectName = styled.div`
  color: #000;
  ${(props) => props.theme.fonts.caption1};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%; /* 부모 요소(Card)의 크기를 따름 */
  height: 2.7rem;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.theme.media.ph(css`
      height: 2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 2.2rem;
    `)}
`;

export const ReactionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.2rem;
  gap: 0.375rem;

  width: 100%; // It follows its parent element, Card.
  height: 1.8rem;

  ${(props) =>
    props.theme.media.ph(css`
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
    `)}
`;

export const ReactionIcon = styled.img`
  // Clear.
  width: 1.8rem;
  height: 1.8rem;

  margin-right: 0.188rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReactionLetter = styled.span`
  // Clear.
  color: var(--Gray-60, #919298);
  ${(props) => props.theme.fonts.caption4};

  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.4rem;
`;
