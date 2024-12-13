import styled, { css } from 'styled-components';

export const MockUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 19.4rem;

  p {
    color: ${(props) => props.theme.colors.blue60};

    ${(props) =>
      props.theme.media.tab(
        () => `
      ${props.theme.fonts.headline3};
      `
      )}

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

  img {
    margin-top: 1.6rem;
    ${(props) =>
      props.theme.media.tab(css`
        width: 34.8rem;
        height: 45.4rem;
      `)}
    ${(props) =>
      props.theme.media.ph(css`
        width: 20rem;
        height: 26rem;
      `)}
  }

  button {
    width: 32.8rem;
    height: 4.8rem;
    border-radius: 1.2rem;
    background-color: ${(props) => props.theme.colors.blue50};
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fonts.subhead3};

    ${(props) =>
      props.theme.media.tab(css`
        margin-top: 3.4rem;
        margin-bottom: 5.6rem;
      `)}
    ${(props) =>
      props.theme.media.ph(css`
        margin-top: 2.5rem;
        margin-bottom: 16.4rem;
      `)}
  }
`;

export const PCMockUpLayout = styled.div`
  margin: 33rem 0 23.8rem;
  position: relative;
  width: 124.5rem;
  height: 70rem;

  ${(props) =>
    props.theme.media.base(css`
      margin: 36.3rem 0 21.4rem;
      width: 112rem;
      height: 63.6rem;
    `)}

  .macbook {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .contents {
    overflow: hidden;
    position: absolute;
    top: 4.4rem;
    left: 15.4rem;
    width: 93.1rem;
    height: 58.2rem;
    z-index: 1;

    ${(props) =>
      props.theme.media.base(css`
        top: 4rem;
        left: 13.9rem;
        width: 83.8rem;
        height: 52.3rem;
      `)}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.4s ease-in-out;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      transition: background-color 0.3s ease;
    }

    &:hover::before {
      background-color: rgba(255, 255, 255, 0.6);
    }

    &:hover img {
      filter: blur(6rem);
    }

    .induce-login {
      position: absolute;
      top: 19.7rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      z-index: 3;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.3s ease,
        visibility 0.3s ease;

      ${(props) =>
        props.theme.media.base(css`
          top: 17.7rem;
        `)}

      &:hover {
        opacity: 1;
        visibility: visible;
      }
      p {
        color: ${(props) => props.theme.colors.blue60};
        text-align: center;
        font-family: 'Pretendard', sans-serif;
        font-size: 4.2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        letter-spacing: 0.021rem;

        ${(props) =>
          props.theme.media.base(
            () => `
            ${props.theme.fonts.headingAbout2};
          `
          )}
      }

      button {
        position: absolute;
        width: 36rem;
        height: 4.8rem;
        top: 17.4rem;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 1.2rem;
        background-color: ${(props) => props.theme.colors.blue50};
        color: ${(props) => props.theme.colors.white};
        ${(props) => props.theme.fonts.subhead2};

        ${(props) =>
          props.theme.media.base(
            () => `
            width: 36rem;
            height: 4.8rem;
            top: 15rem;
          `
          )}
      }
    }

    &:hover .induce-login {
      opacity: 1;
      visibility: visible;
    }
  }
`;
