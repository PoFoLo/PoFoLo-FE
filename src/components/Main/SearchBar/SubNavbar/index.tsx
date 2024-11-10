import React from 'react';
import * as S from '@/components/Main/SearchBar/SubNavbar/styles';

import searchBarSearchSrc from '@/assets/webps/Main/searchBarSearch.webp';

const SubNavbar: React.FC = () => {
  return (
    <S.Navbar>
      <S.FilterButton>Filter</S.FilterButton>
      <S.SearchContainer>
        <S.PlaceholderText>검색</S.PlaceholderText>
        <S.Icon src={searchBarSearchSrc} alt="검색 아이콘" />
      </S.SearchContainer>
      <S.SortButton>Sort</S.SortButton>
    </S.Navbar>
  );
};

export default SubNavbar;
