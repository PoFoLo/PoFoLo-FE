import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styles';

import navbarLogoSrc from '@/assets/webps/Navbar/navbarLogo.webp';
import navbarGoBackSrc from '@/assets/webps/Navbar/navbarGoBack.webp';
import navbarMyPageSrc from '@/assets/webps/Navbar/navbarMyPage.webp';
import navbarLogoutSrc from '@/assets/svgs/Navbar/navbarLogout.svg';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: 'home' | 'mypage' | '' | 'login' | -1) => {
    if (page === -1) navigate(-1);
    else navigate(`/${page}`);
  };

  // 특정 경로에 따른 UI 결정
  const isProjectPage = location.pathname.includes('project');

  return (
    <S.NavContainer>
      {/* 왼쪽 로고 부분 */}
      {isProjectPage ? (
        <S.NavLeft>
          <S.Logo src={navbarGoBackSrc} alt="GoBack" onClick={() => handleNavigate(-1)} />
        </S.NavLeft>
      ) : (
        <S.NavLeft>
          <S.Logo src={navbarLogoSrc} alt="Logo" onClick={() => handleNavigate('home')} />
        </S.NavLeft>
      )}

      {/* 오른쪽 네비게이션 요소들 */}
      <S.NavRight>
        <S.NavLink width={9.2} onClick={() => handleNavigate('')}>
          서비스 소개
        </S.NavLink>
        <S.NavLink width={10.9} onClick={() => handleNavigate('home')}>
          모든 프로젝트
        </S.NavLink>

        {/* 로그인/로그아웃 버튼 - 나중에 추가 예정으로 주석 처리 */}
        {/* {location.pathname === '/mypage' ? (
          <S.LogoutButtonContainer onClick={() => handleNavigate('home')}>
            <S.LogoutText>로그아웃</S.LogoutText>
            <S.IconContainer src={navbarLogoutSrc} alt="navbarLogoutImage" />
          </S.LogoutButtonContainer>
        ) : (
          <S.LoginButton onClick={() => handleNavigate('login')}>로그인</S.LoginButton>
        )} */}

        {/* 현재는 로그인된 버전만 표시, 기본 MyPage 이미지로 연결 */}
        <S.MyPageButton onClick={() => handleNavigate('mypage')}>
          <S.MyPageImage src={navbarMyPageSrc} alt="myPageButton" />
        </S.MyPageButton>
      </S.NavRight>
    </S.NavContainer>
  );
};

export default Navbar;
