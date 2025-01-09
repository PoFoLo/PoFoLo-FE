import { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Profile from '@/components/MyPage/Profile';
import TabNavigation from '@/components/MyPage/TabNavigation';
import MyPageFilterDetail from '@/components/MyPage/MyPageFilterDetail';
import MyPageCardList from '@/components/MyPage/MyPageCardList';
import * as S from '@/pages/MyPage/styles';
import { useParams } from 'react-router-dom';

export const MyPage = () => {
  const { user_id } = useParams<{ user_id: string }>();
  const loginUserId = localStorage.getItem('user_id');
  const isMyProfile = user_id === loginUserId;
  const [activeTab, setActiveTab] = useState<'allProjects' | 'portfolio'>('allProjects');
  const [selectedFilter, setSelectedFilter] = useState<string>('내 프로젝트');

  return (
    <S.Layout>
      <Navbar />
      <Profile />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {isMyProfile && (
        <MyPageFilterDetail
          activeTab={activeTab}
          selectedFilter={selectedFilter} // 현재 선택된 필터
          setSelectedFilter={setSelectedFilter} // 필터 변경 함수
        />
      )}
      <MyPageCardList activeTab={activeTab} selectedFilter={selectedFilter} />
    </S.Layout>
  );
};

export default MyPage;
