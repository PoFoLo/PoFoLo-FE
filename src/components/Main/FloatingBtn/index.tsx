import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/components/Main/FloatingBtn/style';
import floatingBtnSrc from '@/assets/webps/Main/floatingBtn.webp'; // 아이콘 이미지 경로를 실제로 사용하세요.

const FloatingBtn: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/project/write');
  };

  return (
    <S.FloatingBtnContainer onClick={handleClick}>
      <S.FloatingBtnIcon src={floatingBtnSrc} alt="Floating Button Icon" />
      <S.FloatingBtnLetter>업로드</S.FloatingBtnLetter>
    </S.FloatingBtnContainer>
  );
};

export default FloatingBtn;
