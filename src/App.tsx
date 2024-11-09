/*
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '@/pages/About/AboutPage';
import { MainPage } from '@/pages/Main/MainPage';
import { ProjectPage } from '@/pages/Project/ProjectPage';
import { WriteProjectPage } from '@/pages/Project/WriteProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        <Route path="/project/write" element={<WriteProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar/Navbar'; // Navbar 경로에 맞게 설정
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Content>
          <Routes>
            {/* 빈 페이지를 위한 기본 경로 */}
            <Route path="/" element={<Home />} />
            {/* 추가 페이지를 위한 경로 설정 가능 */}
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Content>
      </AppContainer>
    </Router>
  );
};

// 빈 페이지 컴포넌트
const Home: React.FC = () => <div>홈 페이지 내용</div>;
const MyPage: React.FC = () => <div>마이 페이지 내용</div>;
const Login: React.FC = () => <div>로그인 페이지 내용</div>;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.main`
  width: 100%;
  padding-top: 6.4rem; // Navbar 높이만큼 패딩 추가
`;

export default App;
