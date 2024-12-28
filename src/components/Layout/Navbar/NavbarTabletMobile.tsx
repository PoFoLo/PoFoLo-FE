import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styles';

import navbarLogoTabletMobileSrc from '@/assets/webps/Common/navbarLogoTabletMobile.webp';
import navbarGoBackSrc from '@/assets/webps/Common/navbarGoBack.webp';
import navbarHamburgerSrc from '@/assets/webps/Common/navbarHamburger.webp';
import logoutIconSrc from '@/assets/webps/Common/logoutIcon.webp';

interface NavbarMobileProps {
  isLoggedIn: boolean;
  onGoBackClick?: () => void;
}

const NavbarTabletMobile = ({ isLoggedIn, onGoBackClick }: NavbarMobileProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 상태 관리

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
    setIsMenuOpen(false); // 메뉴 닫기
  };

  const isGoBackVisible =
    location.pathname.includes('project') || location.pathname.includes('portfolio');

  const handleGoBackClick = () => {
    if (onGoBackClick) {
      onGoBackClick();
    } else {
      navigate(-1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // 마이페이지 버튼이 보이는 경우를 계산하는 isExtended 상태
  const isExtended = isLoggedIn && isMenuOpen;

  return (
    <>
      <S.NavbarContainer>
        <S.NavbarBody>
          {isLoggedIn ? (
            isGoBackVisible ? (
              <>
                <S.NavbarLeftGoBackButton
                  src={navbarGoBackSrc}
                  alt="GoBack"
                  onClick={handleGoBackClick}
                />
                <S.NavbarHamburgerButtonTabletMobile
                  src={navbarHamburgerSrc}
                  alt="hamburgerButton"
                  onClick={toggleMenu}
                />
              </>
            ) : (
              <>
                <S.NavbarLeftLogoTabletMobile
                  src={navbarLogoTabletMobileSrc}
                  alt="Logo"
                  onClick={() => handleNavigate('home')}
                />
                <S.NavbarHamburgerButtonTabletMobile
                  src={navbarHamburgerSrc}
                  alt="hamburgerButton"
                  onClick={toggleMenu}
                />
              </>
            )
          ) : (
            <>
              <S.NavbarLeftLogoTabletMobile src={navbarLogoTabletMobileSrc} alt="Logo" />
              <S.NavbarRightContainerTabletMobile>
                <S.NavbarLoginButton onClick={() => handleNavigate('login')}>
                  로그인
                </S.NavbarLoginButton>
                <S.NavbarHamburgerButtonTabletMobile
                  src={navbarHamburgerSrc}
                  alt="hamburgerButton"
                  onClick={toggleMenu}
                />
              </S.NavbarRightContainerTabletMobile>
            </>
          )}
        </S.NavbarBody>
      </S.NavbarContainer>

      {isMenuOpen && (
        <S.NavbarDetailContainerTabletMobile isExtended={isExtended}>
          <S.NavbarDetailBodyTabletMobile>
            <S.NavbarDetailPageButtonContainerTabletMobile>
              <S.NavbarDetailPageButtonTabletMobile onClick={() => handleNavigate('')}>
                서비스 소개
              </S.NavbarDetailPageButtonTabletMobile>
            </S.NavbarDetailPageButtonContainerTabletMobile>
            <S.NavbarDetailPageButtonContainerTabletMobile>
              <S.NavbarDetailPageButtonTabletMobile onClick={() => handleNavigate('home')}>
                모든 프로젝트
              </S.NavbarDetailPageButtonTabletMobile>
            </S.NavbarDetailPageButtonContainerTabletMobile>
            {isLoggedIn && (
              <>
                <S.NavbarDetailPageButtonContainerTabletMobile>
                  <S.NavbarDetailPageButtonTabletMobile onClick={() => handleNavigate('mypage')}>
                    마이페이지
                  </S.NavbarDetailPageButtonTabletMobile>
                  <S.NavbarLogoutButtonContainer onClick={() => handleNavigate('home')}>
                    <S.NavbarLogoutButtonLetter>로그아웃</S.NavbarLogoutButtonLetter>
                    <S.NavbarLogoutButtonIcon src={logoutIconSrc} alt="logout" />
                  </S.NavbarLogoutButtonContainer>
                </S.NavbarDetailPageButtonContainerTabletMobile>
              </>
            )}
          </S.NavbarDetailBodyTabletMobile>
        </S.NavbarDetailContainerTabletMobile>
      )}
    </>
  );
};

export default NavbarTabletMobile;
