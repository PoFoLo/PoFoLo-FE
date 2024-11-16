import styled from 'styled-components';
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
  width: 48rem;
  padding: 2.4rem;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  border-radius: 2.4rem;
  background-color: rgba(248, 248, 248, 0.8);
  box-shadow: 0rem 0rem 1.6rem 0rem rgba(0, 0, 0, 0.05);
`;

export const IconContainer = styled.div<{ $backgroundImage: string }>`
  width: 5.6rem;
  height: 5.6rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const MainText = styled.p`
  ${(props) => props.theme.fonts.headline3};
  color: black;
`;

export const SubText = styled.p`
  ${(props) => props.theme.fonts.caption2};
  color: ${(props) => props.theme.colors.gray70};
  white-space: pre-line;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.6rem;
`;

// inactive 버튼의 cursor를 pointer로 바꾸기
export const CursorBtn = styled(StyledButton)`
  cursor: pointer;
`;
