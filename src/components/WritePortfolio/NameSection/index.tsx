import * as S from '@/components/FormField/styles';
import Input from '@/components/Common/Input';

interface NameSectionProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const NameSection = ({ name, setName, setErrors, error }: NameSectionProps) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    setErrors((prev) => ({
      ...prev,
      name: false,
    }));
  };
  return (
    <S.SectionContainer>
      <S.SectionTitle>작성자 이름</S.SectionTitle>
      <Input
        value={name}
        onChange={handleNameChange}
        error={error}
        errorMessage="필수 입력 항목입니다."
        placeholder="작성자 이름을 입력하세요"
      />
    </S.SectionContainer>
  );
};

export default NameSection;
