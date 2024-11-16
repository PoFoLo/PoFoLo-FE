import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styles';

import navbarLogoSrc from '@/assets/webps/Navbar/navbarLogo.webp';
import navbarGoBackSrc from '@/assets/webps/Common/navbarGoBack.webp';
import navbarMyPageSrc from '@/assets/webps/Common/navbarMyPage.webp';
// import navbarLogoutSrc from '@/assets/svgs/Navbar/navbarLogout.svg';

interface NavbarProps {
  onGoBackClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
  onMyPageClick?: () => void;
}
const Navbar = ({ onGoBackClick, onAboutClick, onHomeClick, onMyPageClick }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: -1 | '' | 'home' | 'mypage' | 'login') => {
    if (page === -1) navigate(-1);
    else navigate(`/${page}`);
  };

  const isProjectPage = location.pathname.includes('project');

  // props로 전달 받은 함수가 있을 경우 함수 실행, 없을 경우 페이지 이동
  const handleGoBackClick = () => {
    if (onGoBackClick) {
      onGoBackClick();
    } else {
      handleNavigate(-1);
    }
  };

  const handleAboutClick = () => {
    if (onAboutClick) {
      onAboutClick();
    } else {
      handleNavigate('');
    }
  };

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      handleNavigate('home');
    }
  };

  const handleMyPageClick = () => {
    if (onMyPageClick) {
      onMyPageClick();
    } else {
      handleNavigate('mypage');
    }
  };

  return (
    <S.NavContainer>
      <S.NavBody>
        {isProjectPage ? (
          <S.NavLeftGoBack src={navbarGoBackSrc} alt="GoBack" onClick={handleGoBackClick} />
        ) : (
          <S.NavLeftLogo src={navbarLogoSrc} alt="Logo" onClick={() => handleNavigate('home')} />
        )}

        <S.NavRight>
          <S.NavLink width={9.2} onClick={handleAboutClick}>
            서비스 소개
          </S.NavLink>
          <S.NavLink width={10.9} onClick={handleHomeClick}>
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

          <S.MyPageButton onClick={handleMyPageClick}>
            <S.MyPageImage src={navbarMyPageSrc} alt="myPageButton" />
          </S.MyPageButton>
        </S.NavRight>
      </S.NavBody>
    </S.NavContainer>
  );
};

export default Navbar;
