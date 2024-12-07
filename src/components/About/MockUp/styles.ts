import styled from 'styled-components';

export const MockUpLayout = styled.div`
  margin: 43rem 0 8.2rem;
  position: relative;
  width: 157.5rem;
  height: 86.46rem;

  .macbook {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .contents {
    overflow: hidden;
    position: absolute;
    top: 5.5rem;
    left: 21.5rem;
    width: 114.9rem;
    height: 71.8rem;
    z-index: 1;

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
      background-color: rgba(248, 248, 248, 0.5);
    }

    &:hover img {
      filter: blur(6rem);
    }

    .induce-login {
      position: absolute;
      top: 26.7rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      z-index: 3;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.3s ease,
        visibility 0.3s ease;

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
      }
    }

    &:hover .induce-login {
      opacity: 1;
      visibility: visible;
    }
  }
`;
