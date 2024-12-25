import React, { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import * as S from '@/components/MyPage/MyPageFilterDetail/styles';
import uploadMyPageSrc from '@/assets/webps/MyPage/uploadMyPage.webp';

interface MyPageFilterDetailProps {
  activeTab: 'all' | 'portfolio';
}

const MyPageFilterDetail: React.FC<MyPageFilterDetailProps> = ({ activeTab }) => {
  // '모든 프로젝트' 탭일 때
  if (activeTab === 'portfolio') {
    return (
      <S.FilterPortfolioColorContainer>
        <S.FilterPortfolioContainer>
          <S.CreatePortfolioBtnContainer>
            <S.CreatePortfolioBtnLetter>만들기</S.CreatePortfolioBtnLetter>
          </S.CreatePortfolioBtnContainer>
        </S.FilterPortfolioContainer>
      </S.FilterPortfolioColorContainer>
    );
  }

  // '포트폴리오'가 아닐 때 ('모든 프로젝트')
  const [selectedFilter, setSelectedFilter] = useState<string>('내 프로젝트');
  const filters = ['내 프로젝트', '좋아요한 프로젝트', '댓글 단 프로젝트'];
  const { isPhone } = useResponsive();

  return (
    <S.FilterAllProjectColorContainer>
      <S.FilterAllProjectContainer>
        <S.FilterBtnsContainer>
          {filters.map((filter) => (
            <S.FilterButton
              key={filter}
              selected={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            >
              <S.FilterLetter selected={selectedFilter === filter}>{filter}</S.FilterLetter>
            </S.FilterButton>
          ))}
        </S.FilterBtnsContainer>
        {isPhone && <S.uploadButton src={uploadMyPageSrc} alt="uploadButton" />}
      </S.FilterAllProjectContainer>
    </S.FilterAllProjectColorContainer>
  );
};

export default MyPageFilterDetail;
