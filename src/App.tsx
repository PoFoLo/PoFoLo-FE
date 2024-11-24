import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '@/pages/About/AboutPage';
import { MainPage } from '@/pages/Main/MainPage';
import { ProjectDetailPage } from '@/pages/Project/ProjectDetailPage';
import { WriteProjectPage } from '@/pages/Project/WriteProjectPage';
import { WritePortfolioPage } from '@/pages/Portfolio/WritePortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        <Route path="/project/write" element={<WriteProjectPage />} />
        <Route path="/portfolio/write" element={<WritePortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
