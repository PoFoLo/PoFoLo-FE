import Navbar from '@/components/Layout/Navbar/NavbarPC';
import { PortfolioContent } from '@/components/PortfolioDetail/PortfolioContent';
import * as S from '@/pages/Portfolio/PortfolioDetailPage/styles';

export const PortfolioDetailPage = () => {
  return (
    <>
      <S.Layout>
        <Navbar />
        <PortfolioContent />
      </S.Layout>
    </>
  );
};
