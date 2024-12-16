import React from 'react';
import * as S from '@/components/Main/FilterBarsContainer/SubFilterBar/FilterDetail/styles';
import filterLine2UncheckedSrc from '@/assets/webps/Main/filterLine2Unchecked.webp';
import filterLine2CheckedSrc from '@/assets/webps/Main/filterLine2Checked.webp';

interface Props {
  options: string[];
  selectedLine2: string; // 추가
  setSelectedLine2: (label: string) => void; // 추가
}

const FilterDetailsContainer: React.FC<Props> = ({ options, selectedLine2, setSelectedLine2 }) => {
  const handleLine2Click = (label: string) => {
    setSelectedLine2(label);
  };

  return (
    <S.FilterDetailsContainer style={{ overflow: 'visible', whiteSpace: 'nowrap' }}>
      {options.map((label) => (
        <S.FilterDetailBtnContainer key={label} onClick={() => handleLine2Click(label)}>
          <S.FilterDetailBtnIcon
            src={selectedLine2 === label ? filterLine2CheckedSrc : filterLine2UncheckedSrc}
            alt={selectedLine2 === label ? 'CheckedImg' : 'UncheckedImg'}
          />
          <S.FilterDetailBtnLetter selected={selectedLine2 === label}>
            {label}
          </S.FilterDetailBtnLetter>
        </S.FilterDetailBtnContainer>
      ))}
    </S.FilterDetailsContainer>
  );
};

export default FilterDetailsContainer;
