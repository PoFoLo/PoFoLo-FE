// import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import Navbar from '@/components/Layout/Navbar/Navbar';
import * as S from '@/pages/Login/Join/styles';
import { useState } from 'react';
import nextBlue from '@/assets/webps/Login/nextBlue.webp';
import nextWhite from '@/assets/webps/Login/nextWhite.webp';

export const JoinPage = () => {
  // const nav = useNavigate();
  // const location = useLocation();
  // const { kakao_id } = location.state || {}; // state에서 kakao_id 추출

  // if (!kakao_id) {
  //   nav('/');
  // }

  const [nickname, setNickname] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setError(false);
    setErrorMessage('');
    setIsDuplicateChecked(false);
    setNickname(value);
  };

  const handleDuplicateCheck = async () => {
    const trimmedNickname = nickname.trim();

    try {
      // [To Do : 닉네임 중복 검사 api 호출]
      const isTaken = trimmedNickname === '중복'; // 예시: 중복 닉네임 처리

      if (isTaken) {
        setIsDuplicate(true);
        setError(true);
        setErrorMessage('중복된 닉네임이에요');
      } else {
        setIsDuplicate(false);
        setError(false);
        setErrorMessage('');
      }
      setIsDuplicateChecked(true);
    } catch (error) {
      console.error('중복 확인 중 오류 발생:', error);
      setError(true);
    }
  };

  const handleJoin = () => {};

  return (
    <S.Layout>
      <Navbar />
      <S.TopBar>
        <S.Join>회원가입</S.Join>
        <Button size="medium" type="sub">
          <p>가입하기</p>
        </Button>
      </S.TopBar>
      <S.StepContainer>
        <S.Step>3 중 1단계</S.Step>
        <S.Title>사용할 닉네임을 정해주세요</S.Title>
        <S.Description>꼭 실명이 아니어도 괜찮아요</S.Description>
        <S.NicknameContainer>
          <S.Nickname>
            <Input
              value={nickname}
              onChange={handleNicknameChange}
              error={error}
              errorMessage={errorMessage}
              placeholder="입력해주세요"
            />
            {!isDuplicateChecked && (
              <S.DuplicationBtn>
                <Button
                  size="small"
                  type={!nickname.trim() ? 'inactive' : 'sub'}
                  onClick={handleDuplicateCheck}
                  disabled={!nickname.trim()}
                >
                  중복확인
                </Button>
              </S.DuplicationBtn>
            )}
          </S.Nickname>
          <S.NextBtn
            $isSuccess={isDuplicateChecked && !isDuplicate}
            $isDisabled={!nickname.trim()}
            $isDuplicate={isDuplicate}
            onClick={nickname.trim() && isDuplicateChecked && !isDuplicate ? handleJoin : undefined}
          >
            <img
              src={
                isDuplicate || !nickname.trim() || (isDuplicateChecked && isDuplicate)
                  ? nextBlue
                  : nextWhite
              }
              alt="next"
            />
          </S.NextBtn>
        </S.NicknameContainer>
      </S.StepContainer>
    </S.Layout>
  );
};
