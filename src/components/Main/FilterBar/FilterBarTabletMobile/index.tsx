import React, { useState } from 'react';
import SearchBar from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/SearchBar';
import filterIconTabletMobileSrc from '@/assets/webps/Main/filterIconTabletMobile.webp';
import sortIconTabletMobileSrc from '@/assets/webps/Main/sortIconTabletMobile.webp';
import * as S from './styles';

interface Props {
  filterOptions: Record<string, string[]>; // 필터 데이터
  selectedCategory: string; // 선택된 카테고리
  setSelectedCategory: (category: string) => void; // 카테고리 변경 함수
  selectedDetail: string; // 선택된 세부 필터
  setSelectedDetail: (detail: string) => void; // 세부 필터 변경 함수
  selectedSortOption: string; // 선택된 정렬 옵션
  setSelectedSortOption: (option: string) => void; // 정렬 옵션 변경 함수
  cards: any[]; // 추가: 렌더링 중인 카드 데이터
  onSearch: (term: string) => void; // 추가: 검색 결과 콜백
}

const FilterBarTabletMobile: React.FC<Props> = ({
  filterOptions,
  selectedCategory,
  setSelectedCategory,
  selectedDetail,
  setSelectedDetail,
  selectedSortOption,
  setSelectedSortOption,
  cards,
  onSearch,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // 카테고리별로 선택된 세부 필터를 저장
  const [detailState, setDetailState] = useState<Record<string, string>>({
    기획: '전체',
    개발: '전체',
    디자인: '전체',
  });

  const categories = Object.keys(filterOptions); // 카테고리 목록 추출
  const options = filterOptions[selectedCategory || '기획']; // 현재 선택된 카테고리의 세부 옵션 추출

  const handleFilterClick = () => {
    setIsFilterOpen((prev) => !prev);
    setShowDetails(false);
    setIsSortOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category); // 상위 상태 변경
    setSelectedDetail(detailState[category] || '전체'); // 복구된 상태 설정
    setIsFilterOpen(false); // 필터 메뉴 닫기
    setShowDetails(true); // 세부 필터 메뉴 열기
  };

  const handleLine2Click = (label: string) => {
    setDetailState((prev) => ({
      ...prev,
      [selectedCategory]: label,
    }));
    setSelectedDetail(label); // 세부 필터 업데이트
    setShowDetails(false); // 메뉴 닫기
  };

  const handleSortClick = () => {
    setIsSortOpen((prev) => !prev);
    setIsFilterOpen(false);
    setShowDetails(false);
  };

  const handleSortOptionClick = (option: string) => {
    setSelectedSortOption(option); // 상위 상태 변경
    setIsSortOpen(false);
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
          <SearchBar cards={cards} onSearch={onSearch} />
          <S.FilterOrSortIconTabletMobile
            src={sortIconTabletMobileSrc}
            alt="Sort Icon"
            onClick={handleSortClick}
          />
        </S.FilterBarBodyTabletMobile>

        {/* 필터 메뉴 */}
        {isFilterOpen && (
          <S.FilterContainerTabletMobile>
            {categories.map((category) => (
              <S.FilterOrSortButtonTabletMobile
                key={category}
                onClick={() => handleCategorySelect(category)}
                isSelected={selectedCategory === category}
              >
                {category}
              </S.FilterOrSortButtonTabletMobile>
            ))}
          </S.FilterContainerTabletMobile>
        )}

        {/* 세부 필터 메뉴 */}
        {showDetails && (
          <S.FilterContainerTabletMobile>
            {options.map((option) => (
              <S.FilterOrSortButtonTabletMobile
                key={option}
                onClick={() => handleLine2Click(option)}
                isSelected={selectedDetail === option}
              >
                {option}
              </S.FilterOrSortButtonTabletMobile>
            ))}
          </S.FilterContainerTabletMobile>
        )}

        {/* 정렬 메뉴 */}
        {isSortOpen && (
          <S.SortContainerTabletMobile>
            {['최신순', '인기순'].map((option) => (
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
