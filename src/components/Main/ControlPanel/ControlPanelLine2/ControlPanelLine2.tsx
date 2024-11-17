import React from 'react';
import CategoryFilterLine2 from '@/components/Main/ControlPanel/CategoryFilter/CategoryFilterLine2/CategoryFilterLine2';
import * as S from '@/components/Main/ControlPanel/ControlPanelLine2/styles';

interface Props {
  options: string[];
}

const ControlPanelLine2: React.FC<Props> = ({ options }) => {
  return (
    <S.ControlPanelLine2Container>
      <CategoryFilterLine2 options={options} />
    </S.ControlPanelLine2Container>
  );
};

export default ControlPanelLine2;
