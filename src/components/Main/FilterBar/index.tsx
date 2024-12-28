import React, { useEffect, useState } from 'react';
import ControlPanels from '@/components/Main/FilterBar/FilterBarPC';
import FilterBarTabletMobile from '@/components/Main/FilterBar/FilterBarTabletMobile';

const ResponsiveFilterBar: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1200);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1200);
  };

  useEffect(() => {
    // 화면 크기 변화에 따라 상태 업데이트
    window.addEventListener('resize', handleResize);

    // 클린업 함수로 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isDesktop ? <ControlPanels /> : <FilterBarTabletMobile />}</>;
};

export default ResponsiveFilterBar;
