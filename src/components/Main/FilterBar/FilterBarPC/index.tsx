import React, { useState } from 'react';
import * as S from '@/components/Main/FilterBar/FilterBarPC/styles';
import ControlPanel from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar';
import ControlPanelDetail from '@/components/Main/FilterBar/FilterBarPC/SubFilterBar';

const ControlPanels: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('기획');
  const [selectedLine2, setSelectedLine2] = useState<string>('전체');

  const optionsMap: Record<string, string[]> = {
    기획: ['전체', '서비스기획', '상품기획', '마케팅', '광고', '기타'],
    개발: ['전체', '프론트엔드', '백엔드', '데이터분석', '임베디드', '게임', '인공지능', '기타'],
    디자인: ['전체', 'UX/UI', '제품', '패션', '인테리어', '기타'],
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category); // 상위 태그 업데이트
    // 해당 상위 태그의 첫 번째 하위 옵션('전체')로 초기화
    setSelectedLine2(category && optionsMap[category] ? optionsMap[category][0] : '전체');
  };

  return (
    <S.ControlPanelContainer>
      <S.ControlPanelBody>
        {/* Line1 */}
        <ControlPanel
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
        {/* Line2 */}
        <ControlPanelDetail
          options={selectedCategory ? optionsMap[selectedCategory] : []}
          selectedLine2={selectedLine2}
          setSelectedLine2={setSelectedLine2}
        />
      </S.ControlPanelBody>
    </S.ControlPanelContainer>
  );
};

export default ControlPanels;
