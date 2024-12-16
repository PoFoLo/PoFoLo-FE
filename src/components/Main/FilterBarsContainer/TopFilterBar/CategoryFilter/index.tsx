import React from 'react';
import * as S from '@/components/Main/FilterBarsContainer/TopFilterBar/CategoryFilter/styles';

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (label: string) => {
    setSelectedCategory(label === selectedCategory ? null : label);
  };

  return (
    <S.filterLine1Container>
      {['기획', '개발', '디자인'].map((label) => (
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
