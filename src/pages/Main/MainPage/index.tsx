import React from 'react';
import Navbar from '@/components/Layout/Navbar/Navbar';
import CardList from '@/components/Main/CardList';
import FloatingBtn from '@/components/Main/FloatingBtn';
import * as S from './styles';
import ResponsiveFilterBar from '@/components/Main/FilterBar';

export const MainPage: React.FC = () => {
  return (
    <S.MainContainer>
      <Navbar />
      <ResponsiveFilterBar />
      <CardList />
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
