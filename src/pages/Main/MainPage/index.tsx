import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Layout/Navbar/index';
import ResponsiveFilterBar from '@/components/Main/FilterBar';
import CardList from '@/components/Main/CardList';
import FloatingBtn from '@/components/Main/FloatingBtn';
import * as S from '@/pages/Main/MainPage/styles';
import { instance } from '@/apis/instance';

const FILTER_OPTIONS = {
  기획: ['전체', '서비스 기획', '상품 기획', '마케팅', '광고', '기타'],
  개발: ['전체', '프론트엔드', '백엔드', '데이터 분석', '임베디드', '게임', '인공지능', '기타'],
  디자인: ['전체', 'UX/UI', '제품', '패션', '인테리어', '기타'],
};

const MainPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('기획');
  const [selectedLine2, setSelectedLine2] = useState<string>('전체');
  const [sortOption, setSortOption] = useState<string>('최신순');
  const [cards, setCards] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]); // 추가된 상태 정의
  const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어 상태 추가

  // 프로필 데이터를 가져오는 함수
  const fetchUserProfile = async () => {
    const userId = localStorage.getItem('user_id');

    try {
      const response = await instance.get(`/pofolo/users/profile/${userId}/`);
      const profile = response.data.profile;

      if (profile && profile.main_field) {
        setSelectedCategory(profile.main_field); // main_field를 selectedCategory로 설정
      }
    } catch (error) {
      console.error('프로필 API 호출 실패:', error);
    }
  };

  const fetchCards = async () => {
    if (!selectedCategory) return;

    const query = `pofolo/projects/?field=${selectedCategory}`;

    try {
      console.log('API 요청 URL:', query); // 디버깅용 로그
      const response = await instance.get(query); // instance를 사용

      if (Array.isArray(response.data)) {
        console.log('API 호출 성공:', response.data);
        setCards(response.data);
      } else {
        console.error('API 응답 데이터가 배열이 아닙니다.', response.data);
        setCards([]);
      }
    } catch (error) {
      console.error('API 호출 실패:', error);
      setCards([]);
    }
  };

  useEffect(() => {
    fetchUserProfile(); // 페이지 로드 시 프로필 데이터를 가져옴
  }, []);

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category); // 카테고리 변경
    setSelectedLine2('전체'); // 디테일 필터 초기화
  };

  useEffect(() => {
    fetchCards();
  }, [selectedCategory, selectedLine2, sortOption]);

  // 정렬
  const sortedCards = cards.sort((a, b) => {
    if (sortOption === '최신순') {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
    if (sortOption === '인기순') {
      return b.liked_count - a.liked_count;
    }
    return 0;
  });

  // 검색 로직
  const handleSearch = (term: string) => {
    setSearchTerm(term); // 검색어 업데이트
    const filtered = cards.filter((card) => card.title.toLowerCase().includes(term.toLowerCase()));
    setFilteredCards(filtered); // 검색 결과 반영
  };

  // 기존 필터와 검색 결과 통합
  useEffect(() => {
    let result = sortedCards; // 정렬된 카드 목록을 기준으로 시작

    // 1. 세부 필터(selectedLine2)가 '전체'가 아닌 경우, 필터링
    if (selectedLine2 !== '전체') {
      result = result.filter((card) => card.sub_field === selectedLine2);
    }

    // 2. 검색어(searchTerm)가 있는 경우, 추가 필터링
    if (searchTerm) {
      result = result.filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // 3. 최종 결과를 상태로 업데이트
    setFilteredCards(result);
  }, [sortedCards, selectedLine2, searchTerm]);

  return (
    <S.MainContainer>
      <Navbar />
      <ResponsiveFilterBar
        filterOptions={FILTER_OPTIONS}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryClick} // 수정된 핸들러 전달
        selectedLine2={selectedLine2}
        setSelectedLine2={setSelectedLine2}
        sortOption={sortOption}
        setSortOption={setSortOption}
        cards={filteredCards} // 필터링된 카드 전달
        onSearch={handleSearch} // 검색 핸들러 전달
      />
      <CardList cards={filteredCards} />
      <S.FloatingBtnLayout>
        <S.FloatingBtnContainer>
          <S.FloatingBtnBody>
            <FloatingBtn />
          </S.FloatingBtnBody>
        </S.FloatingBtnContainer>
      </S.FloatingBtnLayout>
    </S.MainContainer>
  );
};

export default MainPage;
