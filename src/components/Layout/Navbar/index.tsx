import React from 'react';
import NavbarMobile from '@/components/Layout/Navbar/NavbarTabletMobile';
import NavbarPC from '@/components/Layout/Navbar/NavbarPC';
import { useResponsive } from '@/hooks/useResponsive';

interface ResponsiveNavbarProps {
  isLoggedIn: boolean;
  onGoBackClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
  onMyPageClick?: () => void;
}

const Navbar = ({
  isLoggedIn,
  onGoBackClick,
  onAboutClick,
  onHomeClick,
  onMyPageClick,
}: ResponsiveNavbarProps) => {
  // Media queries
  const { isPhone } = useResponsive();
  const { isTab } = useResponsive();
  const { isPC } = useResponsive();

  return (
    <>
      {(isPhone || isTab) && <NavbarMobile isLoggedIn={isLoggedIn} onGoBackClick={onGoBackClick} />}
      {isPC && (
        <NavbarPC
          isLoggedIn={isLoggedIn} // PC에는 로그인 상태에 따라 로그인 or 로그아웃 버튼 렌더링 구별이 아직 없군.
          onGoBackClick={onGoBackClick}
          onAboutClick={onAboutClick}
          onHomeClick={onHomeClick}
          onMyPageClick={onMyPageClick}
        />
      )}
    </>
  );
};

export default Navbar;
