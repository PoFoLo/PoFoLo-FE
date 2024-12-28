import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OAuthLoading } from '@/pages/Login/OAuthLoading';
import { JoinPage } from '@/pages/Login/Join';
import { AboutPage } from '@/pages/About/AboutPage';
import { MainPage } from '@/pages/Main/MainPage';
import { ProjectDetailPage } from '@/pages/Project/ProjectDetailPage';
import { WriteProjectPage } from '@/pages/Project/WriteProjectPage';
import { WritePortfolioPage } from '@/pages/Portfolio/WritePortfolioPage';
import { PortfolioDetailPage } from '@/pages/Portfolio/PortfolioDetailPage';
import { MyPage } from '@/pages/MyPage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/kakao/callback" element={<OAuthLoading />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/project/:project_id" element={<ProjectDetailPage />} />
        <Route path="/project/write" element={<WriteProjectPage />} />
        <Route path="/project/edit/:project_id" element={<WriteProjectPage />} />
        <Route path="/portfolio/:portfolio_id" element={<PortfolioDetailPage />} />
        <Route path="/portfolio/write" element={<WritePortfolioPage />} />
        <Route path="/portfolio/edit/:portfolio_id" element={<WritePortfolioPage />} />
        <Route path="/mypage/:user_id" element={<MyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
