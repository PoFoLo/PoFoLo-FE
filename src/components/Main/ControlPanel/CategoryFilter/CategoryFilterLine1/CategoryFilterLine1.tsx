import React from 'react';
import * as S from '@/components/Main/ControlPanel/CategoryFilter/CategoryFilterLine1/styles';

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryFilterLine1: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (label: string) => {
    setSelectedCategory(label === selectedCategory ? null : label);
  };

  return (
    <S.filterLine1Container>
      {['기획', '개발', '디자인'].map((label) => (
        <S.filterLine1BtnContainer
          key={label}
          onClick={() => handleCategoryClick(label)}
          style={{
            borderRadius: '56px',
            border: selectedCategory === label ? '1px solid #598DF6' : '1px solid gray',
            background: selectedCategory === label ? '#E6EEFE' : 'transparent',
          }}
        >
          <S.filterLine1BtnLetter>{label}</S.filterLine1BtnLetter>
        </S.filterLine1BtnContainer>
      ))}
    </S.filterLine1Container>
  );
};

export default CategoryFilterLine1;
