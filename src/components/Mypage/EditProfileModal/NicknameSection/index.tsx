import * as S from '@/components/Mypage/EditProfileModal/styles';
import Input from '@/components/Common/Input';

interface NicknameSectionProps {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}
const NicknameSection = ({ nickname, setNickname, setErrors, error }: NicknameSectionProps) => {
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);

    setErrors((prev) => ({
      ...prev,
      nickname: false,
    }));
  };
  return (
    <S.SectionContainer>
      <S.SectionTitle>닉네임</S.SectionTitle>
      <Input
        value={nickname}
        onChange={handleNicknameChange}
        error={error}
        errorMessage="필수 입력 항목입니다."
        placeholder="닉네임을 입력하세요"
      />
    </S.SectionContainer>
  );
};

export default NicknameSection;
