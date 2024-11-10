import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar/Navbar';

const Home = () => <div>Home Page</div>;
const AllProjects = () => <div>All Projects Page</div>;
const ServiceIntro = () => <div>Service Introduction Page</div>;
const MyPage = () => <div>My Page</div>;
const Login = () => <div>Login Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<AllProjects />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service-intro" element={<ServiceIntro />} />
      </Routes>
    </Router>
  );
};

export default App;
