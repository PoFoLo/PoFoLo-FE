import * as S from '@/components/FormField/styles';
import TextArea from '@/components/Common/TextArea';

interface SkillSectionProps {
  skill: string;
  setSkill: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const SkillSection = ({ skill, setSkill, setErrors, error }: SkillSectionProps) => {
  const handleSkillChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkill(e.target.value);

    setErrors((prev) => ({
      ...prev,
      skill: false,
    }));
  };
  return (
    <S.SectionContainer>
      <S.SectionTitle>주요 스킬</S.SectionTitle>
      <TextArea
        value={skill}
        onChange={handleSkillChange}
        error={error}
        errorMessage="필수 입력 항목입니다."
        rows={1}
        placeholder="주요 스킬을 입력하세요"
      />
    </S.SectionContainer>
  );
};

export default SkillSection;
