import * as S from '@/components/Mypage/EditProfileModal/EducationSection/styles';
import Input from '@/components/Common/Input';
import Checkbox from '@/components/Common/CheckBox';

interface EducationSectionProps {
  education: string;
  setEducation: React.Dispatch<React.SetStateAction<string>>;
  educationIsPublic: boolean;
  setEducationIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const EducationSection = ({
  education,
  setEducation,
  educationIsPublic,
  setEducationIsPublic,
  setErrors,
  error,
}: EducationSectionProps) => {
  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(e.target.value);
    setErrors((prev) => ({
      ...prev,
      education: false,
    }));
  };

  const handlePrivateCheckbox = () => {
    setEducationIsPublic((prev) => !prev);
  };

  return (
    <S.SectionContainer>
      <S.SectionTitle>학력 · 소속</S.SectionTitle>
      <S.InputWrapper>
        <Input
          value={education}
          onChange={handleEducationChange}
          placeholder="학력 · 소속"
          hideIcon={true}
          isPrivateCheckbox={true}
          error={error}
          errorMessage="필수 입력 항목입니다."
        />
        <S.CheckboxContainer>
          <S.CheckboxLabel>
            <Checkbox checked={!educationIsPublic} onChange={handlePrivateCheckbox} />
            비공개
          </S.CheckboxLabel>
        </S.CheckboxContainer>
      </S.InputWrapper>
    </S.SectionContainer>
  );
};

export default EducationSection;
