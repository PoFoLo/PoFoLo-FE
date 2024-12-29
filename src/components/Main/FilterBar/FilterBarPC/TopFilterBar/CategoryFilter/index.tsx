import React from 'react';
import * as S from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/CategoryFilter/styles';

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  categories: string[]; // 카테고리 목록을 상위에서 전달받음
}

const CategoryFilter: React.FC<Props> = ({ selectedCategory, setSelectedCategory, categories }) => {
  const handleCategoryClick = (label: string) => {
    if (selectedCategory !== label) {
      setSelectedCategory(label);
    }
  };

  return (
    <S.filterLine1Container>
      {categories.map((label) => (
        <S.filterLine1BtnContainer
          key={label}
          selected={selectedCategory === label}
          onClick={() => handleCategoryClick(label)}
        >
          <S.filterLine1BtnLetter selected={selectedCategory === label}>
            {label}
          </S.filterLine1BtnLetter>
        </S.filterLine1BtnContainer>
      ))}
    </S.filterLine1Container>
  );
};

export default CategoryFilter;
