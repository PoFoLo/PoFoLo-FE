import React, { useEffect, useState } from 'react';
import ControlPanels from '@/components/Main/FilterBar/FilterBarPC';
import FilterBarTabletMobile from '@/components/Main/FilterBar/FilterBarTabletMobile';

interface Props {
  filterOptions: Record<string, string[]>;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedLine2: string;
  setSelectedLine2: (line2: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  cards: any[]; // 추가: 렌더링 중인 카드 데이터
  onSearch: (term: string) => void; // 검색어 문자열을 받는 형태로 수정
  // 추가: 검색 결과 콜백
}

const ResponsiveFilterBar: React.FC<Props> = ({
  filterOptions,
  selectedCategory,
  setSelectedCategory,
  selectedLine2,
  setSelectedLine2,
  sortOption,
  setSortOption,
  cards,
  onSearch,
}) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1200);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearch = (filteredCards: any[]) => {
    console.log('검색된 카드:', filteredCards);
  };

  return (
    <>
      {isDesktop ? (
        <ControlPanels
          filterOptions={filterOptions}
          selectedCategory={selectedCategory || '기획'} // 기본값으로 '기획' 전달
          setSelectedCategory={setSelectedCategory}
          selectedLine2={selectedLine2}
          setSelectedLine2={setSelectedLine2}
          sortOption={sortOption}
          setSortOption={setSortOption}
          cards={cards}
          onSearch={onSearch} // 검색 결과 콜백 전달
        />
      ) : (
        <FilterBarTabletMobile
          filterOptions={filterOptions}
          selectedCategory={selectedCategory || '기획'} // 기본값으로 '기획' 전달
          setSelectedCategory={setSelectedCategory}
          selectedDetail={selectedLine2}
          setSelectedDetail={setSelectedLine2}
          selectedSortOption={sortOption}
          setSelectedSortOption={setSortOption}
          cards={cards}
          onSearch={onSearch} // 검색 결과 콜백 전달
        />
      )}
    </>
  );
};

export default ResponsiveFilterBar;
