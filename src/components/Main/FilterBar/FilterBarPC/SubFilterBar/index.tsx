import React from 'react';
import * as S from '@/components/Main/FilterBar/FilterBarPC/SubFilterBar/styles';
import FilterDetailsContainer from '@/components/Main/FilterBar/FilterBarPC/SubFilterBar/FilterDetail';

interface Props {
  options: string[];
  selectedLine2: string; // 추가
  setSelectedLine2: (label: string) => void; // 추가
}

const SubFilterBar: React.FC<Props> = ({ options, selectedLine2, setSelectedLine2 }) => {
  return (
    <S.SubFilterBar>
      <FilterDetailsContainer
        options={options}
        selectedLine2={selectedLine2} // 전달
        setSelectedLine2={setSelectedLine2} // 전달
      />
    </S.SubFilterBar>
  );
};

export default SubFilterBar;
