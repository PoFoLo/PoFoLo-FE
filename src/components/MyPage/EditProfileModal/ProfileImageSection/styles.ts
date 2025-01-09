import styled, { css } from 'styled-components';

export const HoverImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1.2rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const HoverBtn = styled.button<{ $backgroundImage: string }>`
  width: 5.6rem;
  height: 5.6rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  min-width: 18rem;
  min-height: 18rem;
  border-radius: 1.2rem;
  position: relative;
  overflow: hidden;

  &:hover ${HoverImageContainer} {
    opacity: 1;
  }

  ${(props) =>
    props.theme.media.pc(css`
      width: 24rem;
      height: 24rem;
      min-width: 24rem;
      min-height: 24rem;
    `)}
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const UploadInput = styled.input`
  display: none;
`;
