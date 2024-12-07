import styled from 'styled-components';

export const MotivationLayout = styled.div`
  margin-top: 28.8rem;
  display: flex;
  flex-direction: column;
  gap: 12.8rem;
`;

export const Card = styled.div`
  width: 131.2rem;
  height: 49.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.4rem;
  overflow: hidden;
  box-shadow: inset 0 0 0 0.1rem ${(props) => props.theme.colors.blue10};
`;

export const ImgWrapper = styled.div`
  width: 65.5rem;
  height: 49.2rem;

  img {
    border-top-left-radius: 2.3rem;
    border-bottom-left-radius: 2.3rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImgWrapperRight = styled.div`
  width: 65.5rem;
  height: 49.2rem;

  img {
    border-top-right-radius: 2.3rem;
    border-bottom-right-radius: 2.3rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  width: 65.5rem;
  height: 49.2rem;
  border-radius: 2.3rem;

  img {
    border-top-right-radius: 2.4rem;
    border-bottom-right-radius: 2.4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const TextContainerLeft = styled.div`
  position: relative;
  width: 65.5rem;
  height: 49.2rem;
  border-radius: 2.3rem;

  img {
    border-top-left-radius: 2.4rem;
    border-bottom-left-radius: 2.4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const BlurOverlay = styled.div`
  border-top-right-radius: 2.3rem;
  border-bottom-right-radius: 2.3rem;
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

  h2 {
    margin-top: 4.2rem;
    p {
      ${(props) => props.theme.fonts.headline1};
      color: ${(props) => props.theme.colors.blue60};
    }
  }

  h6 {
    margin-top: 2.4rem;
    p {
      ${(props) => props.theme.fonts.bodyAbout};
      color: ${(props) => props.theme.colors.gray80};
    }
  }
`;

export const BlurOverlayLeft = styled.div`
  border-top-left-radius: 2.3rem;
  border-bottom-left-radius: 2.3rem;
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

  h2 {
    margin-top: 4.2rem;
    p {
      ${(props) => props.theme.fonts.headline1};
      color: ${(props) => props.theme.colors.blue60};
    }
  }

  h6 {
    margin-top: 2.4rem;
    p {
      ${(props) => props.theme.fonts.bodyAbout};
      color: ${(props) => props.theme.colors.gray80};
    }
  }
`;
