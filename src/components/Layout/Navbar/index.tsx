import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavbarMobile from '@/components/Layout/Navbar/NavbarTabletMobile';
import NavbarPC from '@/components/Layout/Navbar/NavbarPC';

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
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1199 }); // 1199px 이하 (모바일, 태블릿)
  const isPC = useMediaQuery({ minWidth: 1200 }); // 1200px 이상 (PC)

  return (
    <>
      {isMobileOrTablet && <NavbarMobile isLoggedIn={isLoggedIn} onGoBackClick={onGoBackClick} />}
      {isPC && (
        <NavbarPC
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
