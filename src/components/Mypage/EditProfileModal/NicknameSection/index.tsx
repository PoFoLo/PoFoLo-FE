import * as S from '@/components/Mypage/EditProfileModal/NicknameSection/styles';
import Input from '@/components/Common/Input';
import Button from '@/components/Common/Button';
import { instance } from '@/apis/instance';
import { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';

interface NicknameSectionProps {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
  isDuplicateChecked: boolean;
  setIsDuplicateChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
const NicknameSection = ({
  nickname,
  setNickname,
  setErrors,
  error,
  isDuplicateChecked,
  setIsDuplicateChecked,
}: NicknameSectionProps) => {
  const [initialNickname] = useState(nickname);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);
  const { isPhone } = useResponsive();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsDuplicateChecked(false);
    setIsDuplicate(false);
    setErrors((prev) => ({
      ...prev,
      nickname: false,
    }));

    if (initialNickname === e.target.value) {
      setIsDuplicateChecked(true);
      setIsDuplicate(false);
    }
  };

  const handleDuplicateCheck = async () => {
    const trimmedNickname = nickname.trim();
    if (!trimmedNickname) return;

    try {
      const response = await instance.post('/pofolo/users/nickname/', {
        nickname: trimmedNickname,
      });

      setIsDuplicate(!response.data.is_available);
      setErrors((prev) => ({
        ...prev,
        nickname: !response.data.is_available,
      }));
      setIsDuplicateChecked(true);
    } catch (error) {
      console.error(error);
    }
  };

  const getErrorMessage = () => {
    if (!nickname.trim()) return '필수 입력 항목입니다.';
    if (isDuplicate) return '중복된 닉네임입니다.';
    if (!isDuplicateChecked) return '닉네임 중복확인을 완료해주세요.';
    return '';
  };

  return (
    <S.SectionContainer>
      <S.SectionTitle>닉네임</S.SectionTitle>
      <S.InputWrapper>
        <Input
          value={nickname}
          onChange={handleNicknameChange}
          error={error}
          errorMessage={getErrorMessage()}
          placeholder="닉네임을 입력하세요"
          hideIcon={hideIcon}
          setHideIcon={setHideIcon}
          isDuplicated={true}
          isDuplicateChecked={isDuplicateChecked} // 추가된 상태 전달
        />
        {!isDuplicateChecked && (
          <S.DuplicationBtn>
            <Button
              size={isPhone ? 'small2' : 'small'}
              type={!nickname.trim() ? 'inactive' : 'sub'}
              onClick={handleDuplicateCheck}
              disabled={!nickname.trim()}
            >
              중복 확인
            </Button>
          </S.DuplicationBtn>
        )}
      </S.InputWrapper>
    </S.SectionContainer>
  );
};

export default NicknameSection;
