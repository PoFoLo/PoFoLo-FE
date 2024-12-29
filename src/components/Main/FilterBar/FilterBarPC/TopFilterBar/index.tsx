import React from 'react';
import CategoryFilter from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/CategoryFilter';
import SearchBar from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/SearchBar';
import SortDropdown from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/SortDropdown';
import * as S from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/styles';

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  categories: string[]; // 추가: 카테고리 목록
  cards: any[]; // 추가: 렌더링 중인 카드 데이터
  onSearch: (filteredCards: any[]) => void; // 추가: 검색 결과 콜백
}

const ControlPanelLine1: React.FC<Props> = ({
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
  categories, // 추가
  cards,
  onSearch,
}) => {
  return (
    <S.ControlPanelContainer>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories} // 추가
      />
      <SearchBar cards={cards} onSearch={onSearch} />
      <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
    </S.ControlPanelContainer>
  );
};

export default ControlPanelLine1;
