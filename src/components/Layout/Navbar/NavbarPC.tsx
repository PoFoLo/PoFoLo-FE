import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styles';

import navbarLogoFullSrc from '@/assets/webps/Common/navbarLogoFull.webp';
import navbarGoBackSrc from '@/assets/webps/Common/navbarGoBack.webp';
import navbarMyPageSrc from '@/assets/webps/Common/navbarMyPage.webp';
import logoutIconSrc from '@/assets/webps/Common/logoutIcon.webp';

interface NavbarProps {
  onGoBackClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
}

const NavbarPC = ({ onGoBackClick, onAboutClick, onHomeClick }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('access_token');

  const handleNavigate = (page: -1 | '' | 'home' | 'mypage' | 'login') => {
    if (page === -1) navigate(-1);
    else navigate(`/${page}`);
  };

  const isGoBackVisible =
    location.pathname.includes('project') || location.pathname.includes('portfolio');

  // props로 전달 받은 함수가 있을 경우 함수 실행, 없을 경우 페이지 이동
  const handleGoBackClick = () => {
    if (onGoBackClick) {
      onGoBackClick();
    } else {
      handleNavigate(-1);
    }
  };

  const handleAboutClick = () => {
    handleNavigate('');
  };

  const handleHomeClick = () => {
    if (isLoggedIn) {
      handleNavigate('home');
    } else {
      handleNavigate('');
    }
  };

  const handleMyPageClick = () => {
    navigate(`/mypage/${localStorage.getItem('user_id')}`);
  };

  const handleKakaoLogin = () => {
    const clientId = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const redirectUri = encodeURIComponent(import.meta.env.VITE_KAKAO_REDIRECT_URI);
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = kakaoLoginUrl;
  };

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    handleNavigate('');
  };

  return (
    <S.NavbarContainer>
      <S.NavbarBody>
        {isLoggedIn ? (
          isGoBackVisible ? (
            <S.NavbarLeftGoBackButton
              src={navbarGoBackSrc}
              alt="GoBack"
              onClick={handleGoBackClick}
            />
          ) : (
            <S.NavbarLeftLogo src={navbarLogoFullSrc} alt="Logo" onClick={handleHomeClick} />
          )
        ) : (
          <div></div>
        )}

        <S.NavbarRightContainer>
          <S.NavbarPageButton width={9.2} onClick={handleAboutClick}>
            서비스 소개
          </S.NavbarPageButton>
          <S.NavbarPageButton width={10.9} onClick={handleHomeClick}>
            모든 프로젝트
          </S.NavbarPageButton>

          {isLoggedIn ? (
            <S.NavbarLogoutButtonContainer onClick={handleLogout}>
              <S.NavbarLogoutButtonLetter>로그아웃</S.NavbarLogoutButtonLetter>
              <S.NavbarLogoutButtonIcon src={logoutIconSrc} alt="navbarLogoutImage" />
            </S.NavbarLogoutButtonContainer>
          ) : (
            <S.NavbarLoginButton onClick={handleKakaoLogin}>로그인</S.NavbarLoginButton>
          )}
          {isLoggedIn ? (
            <S.NavbarMyPageButton onClick={handleMyPageClick}>
              <S.NavbarMyPageImg src={navbarMyPageSrc} alt="myPageButton" />
            </S.NavbarMyPageButton>
          ) : (
            <></>
          )}
        </S.NavbarRightContainer>
      </S.NavbarBody>
    </S.NavbarContainer>
  );
};

export default NavbarPC;
