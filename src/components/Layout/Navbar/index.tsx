import NavbarTabletMobile from '@/components/Layout/Navbar/NavbarTabletMobile';
import NavbarPC from '@/components/Layout/Navbar/NavbarPC';
import { useResponsive } from '@/hooks/useResponsive';

interface ResponsiveNavbarProps {
  onGoBackClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
  onMyPageClick?: () => void;
}

const Navbar = ({
  onGoBackClick,
  onAboutClick,
  onHomeClick,
  onMyPageClick,
}: ResponsiveNavbarProps) => {
  const { isPC } = useResponsive();

  return (
    <>
      {!isPC && <NavbarTabletMobile onGoBackClick={onGoBackClick} />}
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
