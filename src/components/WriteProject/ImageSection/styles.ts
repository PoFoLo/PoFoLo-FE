import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const StyledScrollContainer = styled(ScrollContainer)`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

export const HoverImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
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
  width: 6.4rem;
  height: 9.6rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
`;

export const ImageContainer = styled.div`
  width: 42.7rem;
  height: 24rem;
  position: relative;
  cursor: pointer;

  &:hover ${HoverImageContainer} {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  width: 42.7rem;
  height: 24rem;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 1.2rem;
`;

export const UploadBtn = styled.label<{ $backgroundImage: string }>`
  min-width: 24rem;
  min-height: 24rem;
  background-image: url(${(props) => props.$backgroundImage});
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export * from '@/components/FormField/styles';
