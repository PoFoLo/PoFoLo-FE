import * as S from '@/components/MyPage/TabNavigation/styles';
import { useResponsive } from '@/hooks/useResponsive';
// Import the one that my colleague developed in advance.

interface TabNavigationProps {
  activeTab: 'allProjects' | 'portfolio';
  setActiveTab: (tab: 'allProjects' | 'portfolio') => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  const { isPhone, isTab } = useResponsive();

  if (isPhone || isTab) {
    return (
      <S.TabsContainer>
        <S.TabContainerTabletMobile
          active={activeTab === 'allProjects'}
          onClick={() => setActiveTab('allProjects')}
        >
          <S.TabLetterTabletMobile>모든 프로젝트</S.TabLetterTabletMobile>
        </S.TabContainerTabletMobile>
        <S.TabContainerTabletMobile
          active={activeTab === 'portfolio'}
          onClick={() => setActiveTab('portfolio')}
        >
          <S.TabLetterTabletMobile>포트폴리오</S.TabLetterTabletMobile>
        </S.TabContainerTabletMobile>
      </S.TabsContainer>
    );
  }

  return (
    <S.TabsLayout>
      <S.TabsContainer>
        <S.TabContainer
          active={activeTab === 'allProjects'}
          onClick={() => setActiveTab('allProjects')}
        >
          <S.TabLetter>모든 프로젝트</S.TabLetter>
          <S.TabIcon active={activeTab === 'allProjects'} />
        </S.TabContainer>
        <S.TabContainer
          active={activeTab === 'portfolio'}
          onClick={() => setActiveTab('portfolio')}
        >
          <S.TabLetter>포트폴리오</S.TabLetter>
          <S.TabIcon active={activeTab === 'portfolio'} />
        </S.TabContainer>
      </S.TabsContainer>
    </S.TabsLayout>
  );
};

export default TabNavigation;
