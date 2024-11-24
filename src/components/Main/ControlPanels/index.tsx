import React, { useState } from 'react';
import * as S from '@/components/Main/ControlPanels/styles';
import ControlPanel from '@/components/Main/ControlPanels/ControlPanel';
import ControlPanelDetail from '@/components/Main/ControlPanels/ControlPanelDetail';

const ControlPanels: React.FC = () => {
  // 상태 관리: 선택된 카테고리 저장
  const [selectedCategory, setSelectedCategory] = useState<string | null>('기획');

  // 카테고리별 옵션 설정
  const optionsMap: Record<string, string[]> = {
    기획: ['전체', '서비스기획', '상품기획', '마케팅', '광고', '기타'],
    개발: ['전체', '프론트엔드', '백엔드', '데이터분석', '임베디드', '게임', '인공지능', '기타'],
    디자인: ['전체', 'UX/UI', '제품', '패션', '인테리어', '기타'],
  };

  return (
    <S.ControlPanelContainer>
      <S.ControlPanelBody>
        {/* Line1에 상태와 상태 변경 함수 전달 */}
        <ControlPanel
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* 선택된 카테고리에 따라 Line2에 옵션 전달 */}
        <ControlPanelDetail options={selectedCategory ? optionsMap[selectedCategory] : []} />
      </S.ControlPanelBody>
    </S.ControlPanelContainer>
  );
};

export default ControlPanels;
