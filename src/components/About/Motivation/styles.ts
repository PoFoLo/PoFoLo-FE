import styled, { css } from 'styled-components';

// 공통 border-radius 함수
const borderRadiusStyles = ($reverse?: boolean) => css`
  ${(props) =>
    props.theme.media.pc(css`
      border-top-${$reverse ? 'right' : 'left'}-radius: 2.3rem;
      border-bottom-${$reverse ? 'right' : 'left'}-radius: 2.3rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      border-top-${$reverse ? 'right' : 'left'}-radius: 1.1rem;
      border-bottom-${$reverse ? 'right' : 'left'}-radius: 1.1rem;
    `)}
`;

export const MotivationLayout = styled.div`
  margin-top: 28.8rem;
  display: flex;
  flex-direction: column;
  gap: 12.8rem;

  ${(props) =>
    props.theme.media.tab(css`
      margin-top: 12.8rem;
      gap: 7.2rem;
    `)}

  ${(props) =>
    props.theme.media.ph(css`
      margin-top: 12rem;
      gap: 7.2rem;
    `)}
`;

export const Card = styled.div<{ $isPhone?: boolean }>`
  width: 131.2rem;
  height: 49.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.4rem;
  overflow: hidden;
  box-shadow: inset 0 0 0 0.1rem ${(props) => props.theme.colors.blue10};
  flex-direction: ${(props) => (props.$isPhone ? 'column' : 'row')};

  ${(props) =>
    props.theme.media.tab(css`
      width: 70.9rem;
      height: 24.7rem;
      border-radius: 1.2rem;
    `)}

  ${(props) =>
    props.theme.media.ph(css`
      width: 32.8rem;
      height: 37rem;
      border-radius: 1.2rem;
    `)}
`;

export const ImgWrapper = styled.div<{ $reverse?: boolean }>`
  width: 65.5rem;
  height: 49.2rem;

  ${(props) =>
    props.theme.media.tab(css`
      width: 32.8rem;
      height: 24.5rem;
    `)}

  ${(props) =>
    props.theme.media.ph(css`
      width: 32.6rem;
      height: 20.1rem;
    `)}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${(props) => borderRadiusStyles(props.$reverse)}
  }
`;

export const TextContainer = styled.div<{ $reverse?: boolean }>`
  position: relative;
  width: 65.5rem;
  height: 49.2rem;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.theme.media.tab(css`
      width: 37.9rem;
      height: 24.5rem;
    `)}

  ${(props) =>
    props.theme.media.ph(css`
      width: 32.7rem;
      height: 16.7rem;
    `)}

  ${(props) => borderRadiusStyles(props.$reverse)}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    ${(props) => borderRadiusStyles(props.$reverse)}
  }
`;

export const BlurOverlay = styled.div<{ $reverse?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6rem);
  -webkit-backdrop-filter: blur(6rem);
  z-index: 1;
  padding-left: 5rem;

  ${(props) =>
    props.theme.media.tab(css`
      padding-left: 2.5rem;
    `)}

  ${(props) =>
    props.theme.media.ph(css`
      padding-left: 2rem;
    `)}


  h2 {
    margin-top: 4.2rem;

    ${(props) =>
      props.theme.media.tab(css`
        margin-top: 2.1rem;
      `)}

    ${(props) =>
      props.theme.media.ph(css`
        margin-top: 1.6rem;
      `)}

    p {
      ${(props) => props.theme.fonts.headline1};
      color: ${(props) => props.theme.colors.blue60};

      ${(props) =>
        props.theme.media.tab(css`
          font-family: 'Pretendard', sans-serif;
          font-size: 2.4rem;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: 0.012rem;
        `)}

      ${(props) =>
        props.theme.media.ph(css`
          font-family: 'Pretendard', sans-serif;
          font-size: 2rem;
          font-style: normal;
          font-weight: 700;
          line-height: 150%;
          letter-spacing: 0.005rem;
        `)}
    }
  }

  h6 {
    margin-top: 2.4rem;

    ${(props) =>
      props.theme.media.tab(css`
        margin-top: 1.2rem;
      `)}

    ${(props) =>
      props.theme.media.ph(css`
        margin-top: 0.5rem;
      `)}

    p {
      ${(props) => props.theme.fonts.bodyAbout1};
      color: ${(props) => props.theme.colors.gray80};

      ${(props) =>
        props.theme.media.tab(
          () => `
        ${props.theme.fonts.bodyAbout2};
        `
        )}

      ${(props) =>
        props.theme.media.ph(
          () => `
        ${props.theme.fonts.bodyAbout3};
        `
        )}
    }
  }

  ${(props) => borderRadiusStyles(props.$reverse)}
`;
