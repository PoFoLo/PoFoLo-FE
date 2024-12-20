import * as S from '@/components/FormField/styles';
import TextArea from '@/components/Common/TextArea';

interface CareerSectionProps {
  career: string;
  setCareer: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const CareerSection = ({ career, setCareer, setErrors, error }: CareerSectionProps) => {
  const handleCareerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCareer(e.target.value);

    setErrors((prev) => ({
      ...prev,
      career: false,
    }));
  };
  return (
    <S.SectionContainer>
      <S.SectionTitle>경력</S.SectionTitle>
      <TextArea
        value={career}
        onChange={handleCareerChange}
        error={error}
        errorMessage="필수 입력 항목입니다."
        rows={1}
        placeholder="경력을 자유롭게 입력해주세요"
      />
    </S.SectionContainer>
  );
};

export default CareerSection;
