import React from 'react';
import CategoryFilter from '@/components/Main/ControlPanels/CategoryFilters/CategoryFilter';
import SearchBar from '@/components/Main/ControlPanels/SearchBar';
import SortDropdown from '@/components/Main/ControlPanels/SortDropdown';
import * as S from '@/components/Main/ControlPanels/ControlPanel/styles';

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const ControlPanelLine1: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <S.ControlPanelLine1Container>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchBar />
      <SortDropdown />
    </S.ControlPanelLine1Container>
  );
};

export default ControlPanelLine1;
