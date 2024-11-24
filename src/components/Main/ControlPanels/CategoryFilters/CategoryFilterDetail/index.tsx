import React from 'react';
import * as S from '@/components/Main/ControlPanels/CategoryFilters/CategoryFilterDetail/styles';
import filterLine2UncheckedSrc from '@/assets/webps/Main/filterLine2Unchecked.webp';
import filterLine2CheckedSrc from '@/assets/webps/Main/filterLine2Checked.webp';

interface Props {
  options: string[];
}

const CategoryFilterDetail: React.FC<Props> = ({ options }) => {
  const [selectedLine2, setSelectedLine2] = React.useState<string | null>(null);

  const handleLine2Click = (label: string) => {
    setSelectedLine2(label === selectedLine2 ? null : label);
  };

  return (
    <S.filterLine2Container style={{ overflow: 'visible', whiteSpace: 'nowrap' }}>
      {options.map((label) => (
        <S.filterLine2BtnContainer key={label} onClick={() => handleLine2Click(label)}>
          <S.filterLine2BtnIcon
            src={selectedLine2 === label ? filterLine2CheckedSrc : filterLine2UncheckedSrc}
            alt={selectedLine2 === label ? 'CheckedImg' : 'UncheckedImg'}
          />
          <S.filterLine2BtnLetter selected={selectedLine2 === label}>
            {label}
          </S.filterLine2BtnLetter>
        </S.filterLine2BtnContainer>
      ))}
    </S.filterLine2Container>
  );
};

export default CategoryFilterDetail;
