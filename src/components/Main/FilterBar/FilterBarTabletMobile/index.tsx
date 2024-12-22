import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/SearchBar';
import filterIconTabletMobileSrc from '@/assets/webps/Main/filterIconTabletMobile.webp';
import sortIconTabletMobileSrc from '@/assets/webps/Main/sortIconTabletMobile.webp';
import * as S from './styles';

const FilterBarTabletMobile: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false); // 필터 열림 여부
  const [showDetails, setShowDetails] = useState(false); // 세부 필터 표시 여부
  const [selectedCategory, setSelectedCategory] = useState<string>('기획'); // 기본 카테고리
  const [selectedDetail, setSelectedDetail] = useState<string>('전체'); // 기본 디테일
  const [isSortOpen, setIsSortOpen] = useState(false); // 정렬 메뉴 열림 여부
  const [selectedSortOption, setSelectedSortOption] = useState<string>('최신순'); // 기본 정렬 옵션

  const sortOptions = ['최신순', '인기순'];
  const options = ['기획', '개발', '디자인'];

  const detailsMap: Record<string, string[]> = {
    기획: ['전체', '서비스기획', '상품기획', '마케팅', '광고', '기타'],
    개발: ['전체', '프론트엔드', '백엔드', '데이터분석', '임베디드', '게임', '인공지능', '기타'],
    디자인: ['전체', 'UX/UI', '제품', '패션', '인테리어', '기타'],
  };

  const handleFilterClick = () => {
    setIsFilterOpen((prev) => !prev);
    setShowDetails(false);
    setIsSortOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category); // 선택된 카테고리 업데이트
    setSelectedDetail('전체'); // 디테일 기본값으로 초기화
    setIsFilterOpen(false); // 필터 메뉴 닫기
    setShowDetails(true); // 디테일 메뉴 열기
  };

  const handleLine2Click = (label: string) => {
    setSelectedDetail(label); // 선택된 디테일 업데이트
    setShowDetails(false); // 디테일 메뉴 닫기
  };

  const handleSortClick = () => {
    setIsSortOpen((prev) => !prev);
    setIsFilterOpen(false);
    setShowDetails(false);
  };

  const handleSortOptionClick = (option: string) => {
    setSelectedSortOption(option); // 선택된 정렬 옵션 업데이트
    setIsSortOpen(false); // 정렬 메뉴 닫기
  };

  return (
    <>
      {/* 배경 어둡게 처리 */}
      {(isFilterOpen || showDetails || isSortOpen) && (
        <S.Overlay
          onClick={() => {
            setIsFilterOpen(false);
            setShowDetails(false);
            setIsSortOpen(false);
          }}
        />
      )}
      <S.FilterBarContainerTabletMobile>
        <S.FilterBarBodyTabletMobile>
          <S.FilterOrSortIconTabletMobile
            src={filterIconTabletMobileSrc}
            alt="Filter Icon"
            onClick={handleFilterClick}
          />
          <SearchBar />
          <S.FilterOrSortIconTabletMobile
            src={sortIconTabletMobileSrc}
            alt="Sort Icon"
            onClick={handleSortClick}
          />
        </S.FilterBarBodyTabletMobile>

        {/* 필터 메뉴 */}
        {isFilterOpen && (
          <S.FilterContainerTabletMobile>
            {options.map((option) => (
              <S.FilterOrSortButtonTabletMobile
                key={option}
                onClick={() => handleCategorySelect(option)}
                isSelected={selectedCategory === option}
              >
                {option}
              </S.FilterOrSortButtonTabletMobile>
            ))}
          </S.FilterContainerTabletMobile>
        )}

        {/* 디테일 메뉴 */}
        {showDetails && selectedCategory && (
          <S.FilterContainerTabletMobile>
            {detailsMap[selectedCategory].map((label) => (
              <S.FilterOrSortButtonTabletMobile
                key={label}
                onClick={() => handleLine2Click(label)}
                isSelected={selectedDetail === label}
              >
                {label}
              </S.FilterOrSortButtonTabletMobile>
            ))}
          </S.FilterContainerTabletMobile>
        )}

        {/* 정렬 메뉴 */}
        {isSortOpen && (
          <S.SortContainerTabletMobile>
            {sortOptions.map((option) => (
              <S.FilterOrSortButtonTabletMobile
                key={option}
                onClick={() => handleSortOptionClick(option)}
                isSelected={selectedSortOption === option}
              >
                {option}
              </S.FilterOrSortButtonTabletMobile>
            ))}
          </S.SortContainerTabletMobile>
        )}
      </S.FilterBarContainerTabletMobile>
    </>
  );
};

export default FilterBarTabletMobile;
