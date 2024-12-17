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

  const [nickname, setNickname] = useState(''); // 닉네임 상태
  const [error, setError] = useState(false); // 에러 상태
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 중복 닉네임 로직
    if (value) {
      // [To Do] 중복 닉네임 로직 api 연결
      setError(true);
      setErrorMessage('중복된 닉네임입니다.');
    } else {
      setError(false);
      setErrorMessage('');
    }

    setNickname(value);
  };

  const handleJoin = () => {
    if (!nickname.trim()) {
      setError(true);
      setErrorMessage('닉네임을 입력해주세요.');
      return;
    }
  };

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
              errorMessage="중복된 닉네임입니다."
              placeholder="닉네임을 입력해주세요"
            />
          </S.Nickname>
          <S.NextBtn>
            <img src={nextBlue} alt="next" />
          </S.NextBtn>
        </S.NicknameContainer>
      </S.StepContainer>
    </S.Layout>
  );
};
