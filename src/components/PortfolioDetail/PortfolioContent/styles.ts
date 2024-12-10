import styled, { css } from 'styled-components';

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover {
    opacity: 1;
  }

  ${(props) =>
    props.theme.media.pc(css`
      padding: 1.2rem 2rem;
    `)}
`;

export const OverlayText = styled.div`
  .writer {
    ${(props) => props.theme.fonts.caption4};
    color: ${(props) => props.theme.colors.gray40};

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.caption3};
      `
      )}
  }

  .title {
    ${(props) => props.theme.fonts.caption3};
    color: ${(props) => props.theme.colors.gray5};

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.subhead2};
      `
      )}
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .button {
    display: flex;
    gap: 0.8rem;
  }
`;

export const LeftWrapper = styled.div`
  margin-top: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-contents {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .button {
    display: flex;
    gap: 0.8rem;
  }
`;

export const Title = styled.h2`
  color: black;
  ${(props) => props.theme.fonts.headline4};

  ${(props) =>
    props.theme.media.pc(
      () => `
    ${props.theme.fonts.headline1};
    `
    )}
`;

export const PhoneButtons = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;

  .button {
    display: flex;
    gap: 0.8rem;
  }
`;

export const Link = styled.div<{ $isCopied: boolean }>`
  width: 7.5rem;
  height: 2.1rem;
  box-shadow: inset 0 0 0 0.1rem
    ${(props) => (props.$isCopied ? props.theme.colors.blue60 : props.theme.colors.gray20)};
  border-radius: 3.6rem;
  background-color: ${(props) => props.theme.colors.gray5};
  padding: 0.2rem 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition:
    box-shadow 0.3s ease,
    color 0.3s ease;

  ${(props) =>
    props.theme.media.pc(css`
      width: 12.5rem;
      height: 3.6rem;
      padding: 0.4rem 1.6rem;
    `)}

  img {
    width: 1rem;
    height: 1rem;

    ${(props) =>
      props.theme.media.pc(css`
        width: 1.6rem;
        height: 1.6rem;
      `)}
  }

  span {
    margin-left: ${(props) => (props.$isCopied ? '0.8rem' : '0.4rem')};
    ${(props) => props.theme.fonts.caption4};
    color: ${(props) => (props.$isCopied ? props.theme.colors.blue60 : props.theme.colors.gray80)};
    transition: color 0.3s ease;

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.caption1};
      margin-left: ${props.$isCopied ? '2rem' : '1rem'};
      `
      )}
  }
`;
