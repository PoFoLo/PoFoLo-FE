import * as S from '@/components/Mypage/EditProfileModal/styles';
import CheckboxInput from '@/components/Mypage/EditProfileModal/CheckboxInput';

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
  const handleEducationChange = (value: string) => {
    setEducation(value);
    setErrors((prev) => ({
      ...prev,
      education: false,
    }));
  };

  return (
    <S.SectionContainer>
      <S.SectionTitle>학력 · 소속</S.SectionTitle>
      <CheckboxInput
        inputValue={education}
        isChecked={educationIsPublic}
        inputPlaceholder="학력 · 소속"
        onInputChange={handleEducationChange}
        onCheckboxChange={setEducationIsPublic}
        error={error}
      />
    </S.SectionContainer>
  );
};

export default EducationSection;
