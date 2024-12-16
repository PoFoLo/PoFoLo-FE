import React from 'react';
import CategoryFilter from '@/components/Main/FilterBarsContainer/TopFilterBar/CategoryFilter';
import SearchBar from '@/components/Main/FilterBarsContainer/TopFilterBar/SearchBar';
import SortDropdown from '@/components/Main/FilterBarsContainer/TopFilterBar/SortDropdown';
import * as S from '@/components/Main/FilterBarsContainer/TopFilterBar/styles';

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const ControlPanelLine1: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <S.ControlPanelContainer>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchBar />
      <SortDropdown />
    </S.ControlPanelContainer>
  );
};

export default ControlPanelLine1;
