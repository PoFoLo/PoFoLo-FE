import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '@/pages/About/AboutPage';
import { MainPage } from '@/pages/Main/MainPage';
import { ProjectDetailPage } from '@/pages/Project/ProjectDetailPage';
import { WriteProjectPage } from '@/pages/Project/WriteProjectPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
        <Route path="/home" element={<MainPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        <Route path="/project/write" element={<WriteProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
