import styled, { css } from 'styled-components';

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
  padding: 7.6rem 6.4rem;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 131.2rem;
  min-width: 47.6rem;
  height: 100%;
  padding: 3.6rem 4.8rem 4.8rem 4.8rem;
  box-sizing: border-box;
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
  gap: 1.8rem;
`;

export const GoBackBtn = styled.button<{ $backgroundImage: string }>`
  width: 1.389rem;
  height: 2.4rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 1.8rem;
`;

export const ModalTitleText = styled.p`
  ${(props) => props.theme.fonts.headline2};
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
      overflow-y: auto;
    `)}
`;
