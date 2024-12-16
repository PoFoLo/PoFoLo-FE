import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%); /* 아래에서 시작 */
  }
  to {
    transform: translateY(0); /* 제자리로 이동 */
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 5.6rem;

  ${(props) =>
    props.theme.media.pc(css`
      padding: 7.6rem 6.4rem;
    `)}
`;

export const ModalContainer = styled.div<{ $isAnimating?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem 1.6rem 0rem 0rem;
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
  padding: 2.4rem 2rem 0rem 2rem;
  box-sizing: border-box;

  ${(props) =>
    props.$isAnimating &&
    css`
      animation: ${slideUp} 0.6s ease-out forwards;
    `}

  ${(props) =>
    props.theme.media.pc(css`
      border-radius: 2.4rem;
      max-width: 131.2rem;
      padding: 3.6rem 4.8rem 4.8rem 4.8rem;
    `)}
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.6rem;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GoBackBtn = styled.button<{ $backgroundImage: string }>`
  width: 2rem;
  height: 2rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      width: 1.389rem;
      height: 2.4rem;
      margin-right: 1.8rem;
    `)}
`;

export const ModalTitleText = styled.p`
  ${(props) => props.theme.fonts.headline4};

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.headline2};
  `
    )}
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* 웹킷 브라우저 (크롬, 사파리 등)에서 스크롤바 숨기기 */
  }
  -ms-overflow-style: none; /* IE에서 스크롤바 숨기기 */
  scrollbar-width: none; /* 파이어폭스에서 스크롤바 숨기기 */

  ${(props) =>
    props.theme.media.pc(css`
      display: grid;
      grid-template-columns: repeat(3, calc((100% - 7.6rem) / 3)); /* 3개의 열로 배치, gap 반영 */
      gap: 3.2rem 3.8rem;
    `)}
`;
