import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

// 이미지 파일을 직접 import
import defaultLogoSrc from '@/assets/webps/Navbar/navbarLogo.webp';
import defaultMyPageSrc from '@/assets/webps/Navbar/navbarMyPage.webp';

interface NavbarProps {
  logoSrc?: string;
  myPageSrc?: string;
  isLoggedIn: boolean;
  currentPage: 'home' | 'myPage' | 'serviceIntro';
  onNavigate: (page: 'home' | 'myPage' | 'serviceIntro' | 'login') => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc = defaultLogoSrc,
  myPageSrc = defaultMyPageSrc,
  isLoggedIn,
  currentPage,
  onNavigate,
  onLogout,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (page: 'home' | 'myPage' | 'serviceIntro' | 'login') => {
    onNavigate(page);
    navigate(`/${page}`);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/home');
  };

  return (
    <S.NavContainer>
      {/* 왼쪽 로고 부분 */}
      <S.NavLeft>
        <S.Logo src={logoSrc} alt="Logo" onClick={() => handleNavigate('home')} />
      </S.NavLeft>

      {/* 오른쪽 네비게이션 요소들 */}
      <S.NavRight>
        <S.NavLink width={92} onClick={() => handleNavigate('serviceIntro')}>
          서비스 소개
        </S.NavLink>
        <S.NavLink width={109} onClick={() => handleNavigate('home')}>
          모든 프로젝트
        </S.NavLink>

        {/* 로그인 상태에 따라 표시되는 버튼 */}
        {isLoggedIn ? (
          currentPage === 'myPage' ? (
            <S.LogoutButtonContainer onClick={handleLogout}>
              <S.LogoutText>로그아웃</S.LogoutText>
              <S.IconContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.51884 2.05019C4.77478 -0.240891 8.20365 -0.611056 10.8394 0.93613C11.2057 1.1511 11.3309 1.62685 11.1193 1.99875C10.9076 2.37066 10.4391 2.49788 10.073 2.28293C8.02245 1.07931 5.3552 1.36957 3.60193 3.15015C1.50832 5.27636 1.50832 8.72365 3.60193 10.8499C5.3552 12.6304 8.02245 12.9207 10.073 11.7171C10.4391 11.5021 10.9076 11.6293 11.1193 12.0013C11.3309 12.3732 11.2057 12.8489 10.8394 13.0639C8.20365 14.611 4.77478 14.2409 2.51884 11.9498C-0.172948 9.21615 -0.172948 4.78389 2.51884 2.05019ZM12.2122 4.11666C12.5113 3.81291 12.9963 3.81291 13.2953 4.11666L14.7437 5.5876C14.8804 5.72644 15.0135 5.86154 15.1171 5.98537C15.2307 6.1214 15.353 6.29399 15.425 6.51932C15.525 6.83176 15.525 7.16831 15.425 7.48067C15.353 7.70607 15.2307 7.87866 15.1171 8.01462C15.0135 8.13844 14.8804 8.27362 14.7437 8.41238L13.2953 9.88333C12.9963 10.1871 12.5113 10.1871 12.2122 9.88333C11.9132 9.57961 11.9132 9.08711 12.2122 8.78338L13.2024 7.77778H7.39276C6.96977 7.77778 6.6269 7.42957 6.6269 6.99999C6.6269 6.57042 6.96977 6.2222 7.39276 6.2222H13.2024L12.2122 5.21661C11.9132 4.91287 11.9132 4.4204 12.2122 4.11666Z"
                />
              </S.IconContainer>
            </S.LogoutButtonContainer>
          ) : (
            <S.MyPageButton
              src={myPageSrc}
              alt="myPageButton"
              onClick={() => handleNavigate('myPage')}
            />
          )
        ) : (
          <S.LoginButton onClick={() => handleNavigate('login')}>로그인</S.LoginButton>
        )}
      </S.NavRight>
    </S.NavContainer>
  );
};

export default Navbar;
