// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { AboutPage } from '@/pages/About/AboutPage';
// import { MainPage } from '@/pages/Main/MainPage';
// import { ProjectPage } from '@/pages/Project/ProjectPage';
// import { WriteProjectPage } from '@/pages/Project/WriteProjectPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AboutPage />} />
//         <Route path="/home" element={<MainPage />} />
//         <Route path="/project/:projectId" element={<ProjectPage />} />
//         <Route path="/project/write" element={<WriteProjectPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
