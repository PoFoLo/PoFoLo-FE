import styled, { css } from 'styled-components';
import { StyledButton } from '@/components/Common/Button/styles';

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
  width: 36rem;
  padding: 1.8rem;
  margin: 0rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  border-radius: 2.4rem;
  background-color: rgba(248, 248, 248, 0.9);
  box-shadow: 0rem 0rem 1.6rem 0rem rgba(0, 0, 0, 0.05);

  ${(props) =>
    props.theme.media.pc(css`
      width: 48rem;
      padding: 2.4rem;
      gap: 2.4rem;
    `)}
`;

export const IconContainer = styled.div<{ $backgroundImage: string }>`
  width: 4.2rem;
  height: 4.2rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;

  ${(props) =>
    props.theme.media.pc(css`
      width: 5.6rem;
      height: 5.6rem;
    `)}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;

  ${(props) =>
    props.theme.media.pc(css`
      gap: 0.4rem;
    `)}
`;

export const MainText = styled.p`
  ${(props) => props.theme.fonts.headline4};

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.headline3};
  `
    )}
`;

export const SubText = styled.p`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.gray70};
  white-space: pre-line;
  text-align: center;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption2};
  `
    )}
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      gap: 1.6rem;
    `)}
`;

export const ModalBtn = styled(StyledButton)`
  height: 4.8rem;
  flex: 1;
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(
      () => `
	  ${props.theme.fonts.caption1};
  `
    )}

  ${(props) =>
    props.theme.media.tab(
      () => `
	  ${props.theme.fonts.caption1};
  `
    )}
`;
