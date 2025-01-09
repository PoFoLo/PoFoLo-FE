import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy Loading 적용
const OAuthLoading = lazy(() => import('@/pages/Login/OAuthLoading'));
const JoinPage = lazy(() => import('@/pages/Login/Join'));
const AboutPage = lazy(() => import('@/pages/About/AboutPage'));
const MainPage = lazy(() => import('@/pages/Main/MainPage'));
const ProjectDetailPage = lazy(() => import('@/pages/Project/ProjectDetailPage'));
const WriteProjectPage = lazy(() => import('@/pages/Project/WriteProjectPage'));
const WritePortfolioPage = lazy(() => import('@/pages/Portfolio/WritePortfolioPage'));
const PortfolioDetailPage = lazy(() => import('@/pages/Portfolio/PortfolioDetailPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'));
const MyPage = lazy(() => import('@/pages/MyPage'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      {/* Suspense로 Lazy Loaded 컴포넌트 감싸기 */}
      <Suspense fallback={<div>로딩 중...</div>}>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/kakao/callback" element={<OAuthLoading />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/project/:project_id" element={<ProjectDetailPage />} />
          <Route path="/project/write" element={<WriteProjectPage />} />
          <Route path="/project/edit/:project_id" element={<WriteProjectPage />} />
          <Route path="/portfolio/:portfolio_id" element={<PortfolioDetailPage />} />
          <Route path="/portfolio/invite/:uuid" element={<PortfolioDetailPage />} />
          <Route path="/portfolio/write" element={<WritePortfolioPage />} />
          <Route path="/portfolio/edit/:portfolio_id" element={<WritePortfolioPage />} />
          <Route path="/mypage/:user_id" element={<MyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
