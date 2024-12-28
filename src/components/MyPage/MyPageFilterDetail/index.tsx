import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '@/hooks/useResponsive';
import * as S from '@/components/MyPage/MyPageFilterDetail/styles';
import uploadMyPageSrc from '@/assets/webps/MyPage/uploadMyPage.webp';

interface MyPageFilterDetailProps {
  activeTab: 'all' | 'portfolio';
}

const MyPageFilterDetail: React.FC<MyPageFilterDetailProps> = ({ activeTab }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('내 프로젝트');
  const filters = ['내 프로젝트', '좋아요한 프로젝트', '댓글 단 프로젝트'];
  const { isPhone } = useResponsive();

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleFilterClick = (filter: string, index: number) => {
    setSelectedFilter(filter);

    // 버튼을 중앙으로 스크롤
    if (containerRef.current && buttonRefs.current[index]) {
      const container = containerRef.current;
      const button = buttonRefs.current[index];
      const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
      const containerCenter = container.offsetWidth / 2;
      const scrollPosition = buttonCenter - containerCenter;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const navigate = useNavigate();

  const handleUpload = () => {
    navigate('/project/write');
  };

  const handleCreate = () => {
    navigate('/portfolio/write');
  };

  // '포트폴리오' 탭
  if (activeTab === 'portfolio') {
    return (
      <S.FilterPortfolioColorContainer>
        <S.FilterPortfolioContainer>
          <S.uploadButton src={uploadMyPageSrc} alt="uploadButton" onClick={handleCreate} />
        </S.FilterPortfolioContainer>
      </S.FilterPortfolioColorContainer>
    );
  }

  // '모든 프로젝트' 탭
  return (
    <S.FilterAllProjectColorContainer>
      <S.FilterAllProjectContainer>
        <S.FilterBtnsContainer ref={containerRef}>
          {filters.map((filter, index) => (
            <S.FilterButton
              key={filter}
              ref={(el) => (buttonRefs.current[index] = el)}
              selected={selectedFilter === filter}
              onClick={() => handleFilterClick(filter, index)}
            >
              <S.FilterLetter selected={selectedFilter === filter}>{filter}</S.FilterLetter>
            </S.FilterButton>
          ))}
        </S.FilterBtnsContainer>
        {isPhone && (
          <S.uploadButton src={uploadMyPageSrc} alt="uploadButton" onClick={handleUpload} />
        )}
      </S.FilterAllProjectContainer>
    </S.FilterAllProjectColorContainer>
  );
};

export default MyPageFilterDetail;
