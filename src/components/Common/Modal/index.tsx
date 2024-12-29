import * as S from '@/components/Common/Modal/styles';
import checked from '@/assets/webps/Common/modalChecked.webp';
import warning from '@/assets/webps/Common/modalWarning.webp';
import { useEffect, useCallback, useRef } from 'react';
import { useResponsive } from '@/hooks/useResponsive';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon: 'checked' | 'warning';
  mainText: string;
  subText?: string;
  LBtnText: string;
  LBtnOnClick: () => void;
  RBtnText: string;
  RBtnOnclick: () => void;
}

const Modal = ({
  isOpen = false,
  setIsOpen,
  icon,
  mainText,
  subText,
  LBtnText,
  LBtnOnClick,
  RBtnText,
  RBtnOnclick,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isPC } = useResponsive();
  // 모달 열렸을 때 외부 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 모달 외부 클릭 시 닫히게
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      {isOpen && (
        <S.ModalOverlay>
          <S.ModalContainer ref={modalRef}>
            <S.IconContainer $backgroundImage={icon == 'checked' ? checked : warning} />
            <S.TextContainer>
              <S.MainText>{mainText}</S.MainText>
              <S.SubText>{subText}</S.SubText>
            </S.TextContainer>
            <S.BtnContainer>
              <S.ModalBtn
                $buttonSize={isPC ? 'large' : 'medium'}
                $buttonType="inactive"
                onClick={LBtnOnClick}
              >
                {LBtnText}
              </S.ModalBtn>
              <S.ModalBtn
                $buttonSize={isPC ? 'large' : 'medium'}
                $buttonType="main"
                onClick={RBtnOnclick}
              >
                {RBtnText}
              </S.ModalBtn>
            </S.BtnContainer>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default Modal;
