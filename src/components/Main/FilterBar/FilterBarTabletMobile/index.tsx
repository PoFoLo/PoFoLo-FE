import React, { useState } from 'react';
import SearchBar from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/SearchBar';
import filterIconTabletMobileSrc from '@/assets/webps/Main/filterIconTabletMobile.webp';
import sortIconTabletMobileSrc from '@/assets/webps/Main/sortIconTabletMobile.webp';
import * as S from './styles';

const FilterBarTabletMobile: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('기획');

  const options = ['기획', '개발', '디자인'];

  const handleFilterClick = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsFilterOpen(false); // 필터 닫기
  };

  return (
    <>
      {/* 배경을 어둡게 처리 */}
      {isFilterOpen && <S.Overlay onClick={() => setIsFilterOpen(false)} />}
      <S.FilterBarContainerTabletMobile>
        <S.FilterBarBodyTabletMobile>
          <S.FilterOrSortButtonTabletMobile
            src={filterIconTabletMobileSrc}
            alt="Filter Icon"
            onClick={handleFilterClick}
          />
          <SearchBar />
          <S.FilterOrSortButtonTabletMobile src={sortIconTabletMobileSrc} alt="Sort Icon" />
        </S.FilterBarBodyTabletMobile>

        {/* 필터 컨테이너 */}
        {isFilterOpen && (
          <S.FilterContainerTabletMobile>
            {options.map((option) => (
              <S.FilterButtonTabletMobile key={option} onClick={() => handleCategorySelect(option)}>
                {option}
              </S.FilterButtonTabletMobile>
            ))}
          </S.FilterContainerTabletMobile>
        )}
      </S.FilterBarContainerTabletMobile>
    </>
  );
};

export default FilterBarTabletMobile;
