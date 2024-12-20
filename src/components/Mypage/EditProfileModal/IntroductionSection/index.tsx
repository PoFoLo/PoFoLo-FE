import * as S from '@/components/Mypage/EditProfileModal/styles';
import Input from '@/components/Common/Input';

interface IntroductionSectionProps {
  introduction: string | null;
  setIntroduction: React.Dispatch<React.SetStateAction<string | null>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const IntroductionSection = ({
  introduction,
  setIntroduction,
  setErrors,
  error,
}: IntroductionSectionProps) => {
  const handleIntroductionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduction(e.target.value);

    setErrors((prev) => ({
      ...prev,
      introduction: e.target.value.length > 50,
    }));
  };

  return (
    <S.SectionContainer>
      <S.SectionTitle>한 줄 소개</S.SectionTitle>
      <Input
        value={introduction || ''}
        onChange={handleIntroductionChange}
        error={error}
        errorMessage="한 줄 소개는 50자 이내로 입력해주세요."
        placeholder="한 줄 소개를 입력하세요"
      />
    </S.SectionContainer>
  );
};

export default IntroductionSection;
