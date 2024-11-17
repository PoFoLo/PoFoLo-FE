import React from 'react';
import Navbar from '@/components/Layout/Navbar/Navbar';
import ControlPanel from '@/components/Main/ControlPanel/ControlPanel';
import CardList from '@/components/Main/CardList/CardList';
import * as S from './styles';

export const MainPage: React.FC = () => {
  return (
    <S.MainContainer>
      <Navbar />
      <S.ControlPanelContainer>
        <ControlPanel />
      </S.ControlPanelContainer>
      <CardList />
    </S.MainContainer>
  );
};
