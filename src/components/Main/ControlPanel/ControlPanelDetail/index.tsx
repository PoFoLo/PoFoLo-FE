import React from 'react';
import CategoryFilterDetail from '@/components/Main/ControlPanels/CategoryFilters/CategoryFilterDetail';
import * as S from '@/components/Main/ControlPanels/ControlPanelDetail/styles';

interface Props {
  options: string[];
}

const ControlPanelLine2: React.FC<Props> = ({ options }) => {
  return (
    <S.ControlPanelLine2Container>
      <CategoryFilterDetail options={options} />
    </S.ControlPanelLine2Container>
  );
};

export default ControlPanelLine2;
