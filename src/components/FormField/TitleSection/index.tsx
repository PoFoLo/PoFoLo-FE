import Input from '@/components/Common/Input';
import * as S from '@/components/FormField/styles';

interface TitleSectionProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const TitleSection = ({ title, setTitle, setErrors, error }: TitleSectionProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    // 제목 길이 유효성 검사
    setErrors((prev) => ({
      ...prev,
      title: e.target.value.length > 50,
    }));
  };

  // 에러 메시지 설정
  const titleErrorMessage = !title.trim()
    ? '필수 입력 항목입니다.'
    : title.length > 50
      ? '제목은 50자 이하로 입력해주세요.'
      : '';

  return (
    <S.SectionContainer>
      <S.SectionTitle>제목</S.SectionTitle>
      <Input
        value={title}
        onChange={handleTitleChange}
        error={error}
        errorMessage={titleErrorMessage}
        placeholder="제목을 입력하세요"
      />
    </S.SectionContainer>
  );
};

export default TitleSection;
