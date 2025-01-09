import styled, { css, keyframes } from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 3.4rem;
    ${(props) => props.theme.fonts.headline1};
    color: ${(props) => props.theme.colors.blue30};

    ${(props) =>
      props.theme.media.tab(
        () => `
        margin-top: 3.6rem;
        ${props.theme.fonts.headline3};
        `
      )}

    ${(props) =>
      props.theme.media.ph(
        () => `
        margin-top: 2.4rem;
        ${props.theme.fonts.headline4};
        `
      )}
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 12.5rem;
  height: 13.6rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 9.4rem;
      height: 10.2rem;
    `)}
`;

export const Logo = styled.img<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${fadeInOut} 1s ease-in-out;
  transition: opacity 1s ease-in-out;
`;
