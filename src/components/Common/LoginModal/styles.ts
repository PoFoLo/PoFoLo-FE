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
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44rem;
  padding: 2.4rem 2.4rem 4.8rem 2.4rem;
  margin: 0rem 2rem;
  border-radius: 1.8rem;
  background-color: ${(props) => props.theme.colors.gray5};

  ${(props) =>
    props.theme.media.pc(css`
      width: 62rem;
      padding: 3.6rem 3.6rem 8.23rem 3.6rem;
    `)}
`;

export const CloseBtn = styled.button<{ $backgroundImage: string }>`
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  ${(props) =>
    props.theme.media.pc(css`
      width: 2.4rem;
      height: 2.4rem;
    `)}
`;

export const PofoloLogo = styled.img`
  width: 20.67rem;
  height: 4.98rem;
  margin-top: 1.2rem;
  margin-bottom: 3.6rem;

  ${(props) =>
    props.theme.media.pc(css`
      width: 31.7rem;
      height: 7.55rem;
      margin-top: 4.63rem;
      margin-bottom: 5.6rem;
    `)}
`;

export const LoginBtn = styled.button<{ $backgroundImage: string }>`
  width: 24rem;
  height: 3.3rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  ${(props) =>
    props.theme.media.pc(css`
      width: 32rem;
      height: 4.4rem;
    `)}
`;

export const ModalText = styled.p`
  ${(props) => props.theme.fonts.caption5};
  color: ${(props) => props.theme.colors.gray80};
  margin-top: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      margin-top: 1.6rem;
    `)}

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption3};
  `
    )}
`;
