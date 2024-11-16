import * as S from '@/components/Common/Modal/styles';
import checked from '@/assets/webps/Common/modalChecked.webp';
import warning from '@/assets/webps/Common/modalWarning.webp';
import Button from '@/components/Common/Button';

interface ModalProps {
  isOpen: boolean;
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
  icon,
  mainText,
  subText,
  LBtnText,
  LBtnOnClick,
  RBtnText,
  RBtnOnclick,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.IconContainer $backgroundImage={icon == 'checked' ? checked : warning} />
            <S.TextContainer>
              <S.MainText>{mainText}</S.MainText>
              <S.SubText>{subText}</S.SubText>
            </S.TextContainer>
            <S.BtnContainer>
              <S.CursorBtn $buttonSize="large" $buttonType="inactive" onClick={LBtnOnClick}>
                {LBtnText}
              </S.CursorBtn>
              <Button size="large" type="main" onClick={RBtnOnclick}>
                {RBtnText}
              </Button>
            </S.BtnContainer>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default Modal;
