import React from 'react';
import * as S from '@/components/Main/FilterBar/FilterBarPC/SubFilterBar/styles';
import FilterDetailsContainer from '@/components/Main/FilterBar/FilterBarPC/SubFilterBar/FilterDetail';

interface Props {
  options: string[]; // 상위에서 전달받은 필터 옵션
  selectedLine2: string;
  setSelectedLine2: (label: string) => void;
}

const SubFilterBar: React.FC<Props> = ({ options, selectedLine2, setSelectedLine2 }) => {
  return (
    <S.SubFilterBar>
      <FilterDetailsContainer
        options={options}
        selectedLine2={selectedLine2}
        setSelectedLine2={setSelectedLine2}
      />
    </S.SubFilterBar>
  );
};

export default SubFilterBar;
