import React from 'react';
import CategoryFilterLine1 from '@/components/Main/ControlPanel/CategoryFilter/CategoryFilterLine1/CategoryFilterLine1';
import SearchBar from '@/components/Main/ControlPanel/SearchBar/SearchBar';
import SortDropdown from '@/components/Main/ControlPanel/SortDropdown/SortDropdown';
import * as S from '@/components/Main/ControlPanel/ControlPanelLine1/styles';

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const ControlPanelLine1: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <S.ControlPanelLine1Container>
      <CategoryFilterLine1
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchBar />
      <SortDropdown />
    </S.ControlPanelLine1Container>
  );
};

export default ControlPanelLine1;
