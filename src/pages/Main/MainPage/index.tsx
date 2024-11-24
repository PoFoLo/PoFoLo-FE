import React from 'react';
import Navbar from '@/components/Layout/Navbar/Navbar';
import ControlPanel from '@/components/Main/ControlPanels';
import CardList from '@/components/Main/CardList';
import FloatingBtn from '@/components/Main/FloatingBtn';
import * as S from './styles';

export const MainPage: React.FC = () => {
  return (
    <S.MainContainer>
      <Navbar />
      <S.ControlPanelContainer>
        <ControlPanel />
      </S.ControlPanelContainer>
      <CardList />
      <S.FloatingBtnContainer>
        <S.FloatingBtnBody>
          <FloatingBtn />
        </S.FloatingBtnBody>
      </S.FloatingBtnContainer>
    </S.MainContainer>
  );
};
