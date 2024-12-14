import * as S from '@/components/FormField/styles';
import TextArea from '@/components/Common/TextArea';

interface DescriptionSectionProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const DescriptionSection = ({
  description,
  setDescription,
  setErrors,
  error,
}: DescriptionSectionProps) => {
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);

    setErrors((prev) => ({
      ...prev,
      description: false,
    }));
  };
  return (
    <S.SectionContainer>
      <S.SectionTitle>소개</S.SectionTitle>
      <TextArea
        value={description}
        onChange={handleDescriptionChange}
        error={error}
        errorMessage="필수 입력 항목입니다."
        rows={3}
        placeholder="소개를 입력하세요"
      />
    </S.SectionContainer>
  );
};

export default DescriptionSection;
