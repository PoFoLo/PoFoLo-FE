import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ControlPanel from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar';
import ControlPanelDetail from '@/components/Main/FilterBar/FilterBarPC/SubFilterBar';
import SortDropdown from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/SortDropdown';
import CardList from '@/components/Main/CardList/index';
import * as S from '@/components/Main/FilterBar/FilterBarPC/styles';

interface Props {
  filterOptions: Record<string, string[]>;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedLine2: string;
  setSelectedLine2: (line2: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  cards: any[]; // 추가: 렌더링 중인 카드 데이터
  onSearch: (term: string) => void; // 추가: 검색 결과 콜백
}

const ControlPanels: React.FC<Props> = ({
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
  const categories = Object.keys(filterOptions); // 카테고리 목록 추출
  const options = filterOptions[selectedCategory || '기획']; // 세부 필터 옵션 추출
  return (
    <S.ControlPanelContainer>
      <S.ControlPanelBody>
        <ControlPanel
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
          categories={categories} // 카테고리 전달
          cards={cards}
          onSearch={onSearch}
        />
        <ControlPanelDetail
          options={options}
          selectedLine2={selectedLine2}
          setSelectedLine2={setSelectedLine2}
        />
      </S.ControlPanelBody>
    </S.ControlPanelContainer>
  );
};

export default ControlPanels;
