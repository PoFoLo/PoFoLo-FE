import { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Profile from '@/components/MyPage/Profile';
import TabNavigation from '@/components/MyPage/TabNavigation';
import MyPageFilterDetail from '@/components/MyPage/MyPageFilterDetail';
import MyPageCardList from '@/components/MyPage/MyPageCardList';
import * as S from '@/pages/MyPage/styles';

export const MyPage = () => {
  const [activeTab, setActiveTab] = useState<'allProjects' | 'portfolio'>('allProjects');

  return (
    <S.Layout>
      <Navbar />
      <Profile />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <MyPageFilterDetail activeTab={activeTab} />
      <MyPageCardList activeTab={activeTab} />
    </S.Layout>
  );
};
