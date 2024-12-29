import Navbar from '@/components/Layout/Navbar';
import { PortfolioContent } from '@/components/PortfolioDetail/PortfolioContent';
import * as S from '@/pages/Portfolio/PortfolioDetailPage/styles';

const PortfolioDetailPage = () => {
  return (
    <>
      <S.Layout>
        <Navbar />
        <PortfolioContent />
      </S.Layout>
    </>
  );
};

export default PortfolioDetailPage;
