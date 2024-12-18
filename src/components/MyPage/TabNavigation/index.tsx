import * as S from './styles';

interface TabNavigationProps {
  activeTab: 'all' | 'portfolio';
  setActiveTab: (tab: 'all' | 'portfolio') => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <S.TabsContainer>
      <S.TabContainer active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
        <S.TabLetter>모든 프로젝트</S.TabLetter>
        <S.TabIcon active={activeTab === 'all'} />
      </S.TabContainer>
      <S.TabContainer active={activeTab === 'portfolio'} onClick={() => setActiveTab('portfolio')}>
        <S.TabLetter>포트폴리오</S.TabLetter>
        <S.TabIcon active={activeTab === 'portfolio'} />
      </S.TabContainer>
    </S.TabsContainer>
  );
};

export default TabNavigation;
