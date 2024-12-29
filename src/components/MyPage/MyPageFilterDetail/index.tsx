import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '@/hooks/useResponsive';
import * as S from '@/components/MyPage/MyPageFilterDetail/styles';
import uploadMyPageSrc from '@/assets/webps/MyPage/uploadMyPage.webp';
import Button from '@/components/Common/Button';

interface MyPageFilterDetailProps {
  activeTab: 'allProjects' | 'portfolio';
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void; // 상위 상태 업데이트 함수
}

const MyPageFilterDetail: React.FC<MyPageFilterDetailProps> = ({
  activeTab,
  selectedFilter,
  setSelectedFilter,
}) => {
  const filters = ['내 프로젝트', '좋아요한 프로젝트', '댓글 단 프로젝트'];
  const { isPhone, isPC, isTab } = useResponsive();

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
          {isPhone && (
            <S.uploadButton src={uploadMyPageSrc} alt="uploadButton" onClick={handleCreate} />
          )}
          {isPC && (
            <Button size="medium" type="main" onClick={handleCreate}>
              만들기
            </Button>
          )}
          {isTab && (
            <Button size="verySmall" type="main" onClick={handleCreate}>
              만들기
            </Button>
          )}
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
        {isPC && (
          <Button size="medium" type="main" onClick={handleUpload}>
            새 프로젝트
          </Button>
        )}
        {isTab && (
          <Button size="verySmall" type="main" onClick={handleUpload}>
            새 프로젝트
          </Button>
        )}
      </S.FilterAllProjectContainer>
    </S.FilterAllProjectColorContainer>
  );
};

export default MyPageFilterDetail;
