import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styles';
import LoginModal from '@/components/Common/LoginModal';
import { instance } from '@/apis/instance';

import navbarLogoFullSrc from '@/assets/webps/Common/navbarLogoFull.webp';
import navbarGoBackSrc from '@/assets/webps/Common/navbarGoBack.webp';
import navbarMyPageSrc from '@/assets/webps/Common/navbarMyPage.webp';
import logoutIconSrc from '@/assets/webps/Common/logoutIcon.webp';

interface NavbarProps {
  onGoBackClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
}

const NavbarPC = ({ onGoBackClick }: NavbarProps) => {
  const [profilePic, setProfilePic] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchUserProfile = async () => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      console.error('로컬 스토리지에서 user_id를 찾을 수 없습니다.');
      return;
    }

    try {
      const response = await instance.get(`/pofolo/users/profile/${userId}/`);
      const profile = response.data.profile;

      if (profile && profile.profile_img_url) {
        setProfilePic(profile.profile_img_url);
      }
    } catch (error) {
      console.error('프로필 API 호출 실패:', error);
    }
  };

  useEffect(() => {
    fetchUserProfile(); // 페이지 로드 시 프로필 데이터를 가져옴
  }, []);

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
    //마이페이지는 새로고침하면서 이동
    window.location.href = `/mypage/${localStorage.getItem('user_id')}`;
  };

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    handleNavigate('');
  };

  return (
    <>
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
            {isLoggedIn ? (
              <S.NavbarPageButton width={9.2} onClick={handleAboutClick}>
                서비스 소개
              </S.NavbarPageButton>
            ) : (
              <></>
            )}
            {isLoggedIn ? (
              <S.NavbarPageButton width={10.9} onClick={handleHomeClick}>
                모든 프로젝트
              </S.NavbarPageButton>
            ) : (
              <></>
            )}

            {isLoggedIn ? (
              <S.NavbarLogoutButtonContainer onClick={handleLogout}>
                <S.NavbarLogoutButtonLetter>로그아웃</S.NavbarLogoutButtonLetter>
                <S.NavbarLogoutButtonIcon src={logoutIconSrc} alt="navbarLogoutImage" />
              </S.NavbarLogoutButtonContainer>
            ) : (
              <S.NavbarLoginButton onClick={() => setIsModalOpen(true)}>로그인</S.NavbarLoginButton>
            )}
            {isLoggedIn ? (
              <S.NavbarMyPageButton onClick={handleMyPageClick}>
                <S.NavbarMyPageImg
                  src={profilePic ? profilePic : navbarMyPageSrc}
                  alt="myPageButton"
                />
              </S.NavbarMyPageButton>
            ) : (
              <></>
            )}
          </S.NavbarRightContainer>
        </S.NavbarBody>
      </S.NavbarContainer>
      <LoginModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default NavbarPC;
