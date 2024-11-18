import * as S from '@/components/WriteProject/HeaderSection/styles';
import Button from '@/components/Common/Button';
import CheckBox from '@/components/Common/CheckBox';

interface HeaderSectionProps {
  isPrivate: boolean;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
  handleUploadClick: () => void;
  btnActive: boolean;
}

const HeaderSection = ({
  isPrivate,
  setIsPrivate,
  handleUploadClick,
  btnActive,
}: HeaderSectionProps) => {
  const handleToggleCheckBox = () => {
    setIsPrivate((prev) => !prev);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderText>새 프로젝트</S.HeaderText>
      <S.PrivateCheckBox>
        <CheckBox checked={isPrivate} onChange={handleToggleCheckBox} />
        비공개
      </S.PrivateCheckBox>
      <Button size="medium" type={btnActive ? 'main' : 'inactive'} onClick={handleUploadClick}>
        업로드
      </Button>
    </S.HeaderContainer>
  );
};

export default HeaderSection;
