import * as S from '@/components/FormField/HeaderSection/styles';
import Button from '@/components/Common/Button';
import CheckBox from '@/components/Common/CheckBox';
import { useResponsive } from '@/hooks/useResponsive';

interface HeaderSectionProps {
  headerText: string;
  isPrivate: boolean;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
  handleUploadClick: () => void;
  btnActive: boolean;
}

const HeaderSection = ({
  headerText,
  isPrivate,
  setIsPrivate,
  handleUploadClick,
  btnActive,
}: HeaderSectionProps) => {
  const { isPC } = useResponsive();
  const handleToggleCheckBox = () => {
    setIsPrivate((prev) => !prev);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderText>{headerText}</S.HeaderText>
      <S.PrivateCheckBox>
        <CheckBox checked={isPrivate} onChange={handleToggleCheckBox} />
        비공개
      </S.PrivateCheckBox>
      <Button
        size={isPC ? 'medium' : 'small'}
        type={btnActive ? 'main' : 'inactive'}
        onClick={handleUploadClick}
      >
        업로드
      </Button>
    </S.HeaderContainer>
  );
};

export default HeaderSection;
