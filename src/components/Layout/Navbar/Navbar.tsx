import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styles';

import navbarLogoSrc from '@/assets/webps/Navbar/navbarLogo.webp';
import navbarGoBackSrc from '@/assets/webps/Common/navbarGoBack.webp';
import navbarMyPageSrc from '@/assets/webps/Common/navbarMyPage.webp';
import navbarLogoutSrc from '@/assets/svgs/Navbar/navbarLogout.svg';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: -1 | '' | 'home' | 'mypage' | 'login') => {
    if (page === -1) navigate(-1);
    else navigate(`/${page}`);
  };

  const isProjectPage = location.pathname.includes('project');

  return (
    <S.NavContainer>
      <S.NavBody>
        {isProjectPage ? (
          <S.NavLeftGoBack>
            <S.Logo src={navbarGoBackSrc} alt="GoBack" onClick={() => handleNavigate(-1)} />
          </S.NavLeftGoBack>
        ) : (
          <S.NavLeftLogo>
            <S.Logo src={navbarLogoSrc} alt="Logo" onClick={() => handleNavigate('home')} />
          </S.NavLeftLogo>
        )}

        <S.NavRight>
          <S.NavLink width={9.2} onClick={() => handleNavigate('')}>
            서비스 소개
          </S.NavLink>
          <S.NavLink width={10.9} onClick={() => handleNavigate('home')}>
            모든 프로젝트
          </S.NavLink>

          {/* 로그인/로그아웃 버튼 - 나중에 추가 예정 */}
          {/* {location.pathname === '/mypage' ? (
            <S.LogoutButtonContainer onClick={() => handleNavigate('home')}>
              <S.LogoutText>로그아웃</S.LogoutText>
              <S.IconContainer src={navbarLogoutSrc} alt="navbarLogoutImage" />
            </S.LogoutButtonContainer>
          ) : (
            <S.LoginButton onClick={() => handleNavigate('login')}>로그인</S.LoginButton>
          )} */}

          <S.MyPageButton onClick={() => handleNavigate('mypage')}>
            <S.MyPageImage src={navbarMyPageSrc} alt="myPageButton" />
          </S.MyPageButton>
        </S.NavRight>
      </S.NavBody>
    </S.NavContainer>
  );
};

export default Navbar;
