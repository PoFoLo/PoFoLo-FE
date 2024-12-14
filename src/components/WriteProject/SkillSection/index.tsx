import * as S from '@/components/FormField/styles';
import TextArea from '@/components/Common/TextArea';

interface SkillSectionProps {
  skill: string;
  setSkill: React.Dispatch<React.SetStateAction<string>>;
}

const SkillSection = ({ skill, setSkill }: SkillSectionProps) => {
  return (
    <S.SectionContainer>
      <S.SectionTitle>주요 스킬</S.SectionTitle>
      <TextArea
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        rows={1}
        placeholder="주요 스킬을 입력하세요"
      />
    </S.SectionContainer>
  );
};

export default SkillSection;
