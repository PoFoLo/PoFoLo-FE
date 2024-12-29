import styled, { css } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const StyledScrollContainer = styled(ScrollContainer)`
  display: flex;
  width: 100%;
  gap: 1.6rem;

  ${(props) =>
    props.theme.media.pc(css`
      gap: 2rem;
    `)}
`;

export const HoverImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1.2rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${(props) =>
    props.theme.media.pc(css`
      gap: 2.4rem;
    `)}
`;

export const HoverBtn = styled.button<{ $backgroundImage: string }>`
  width: 4.8rem;
  height: 7.2rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;

  ${(props) =>
    props.theme.media.pc(css`
      width: 6.4rem;
      height: 9.6rem;
    `)};
`;

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${HoverImageContainer} {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  width: 32rem;
  height: 18rem;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      width: 42.7rem;
      height: 24rem;
    `)}
`;

export const UploadBtn = styled.label<{ $backgroundImage: string }>`
  min-width: 18rem;
  min-height: 18rem;
  background-image: url(${(props) => props.$backgroundImage});
  cursor: pointer;

  ${(props) =>
    props.theme.media.pc(css`
      min-width: 24rem;
      min-height: 24rem;
    `)}
`;

export const UploadInput = styled.input`
  display: none;
`;

export * from '@/components/FormField/styles';
