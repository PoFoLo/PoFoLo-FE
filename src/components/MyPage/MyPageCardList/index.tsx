import React from 'react';
import * as S from './styles';
import Card from '@/components/MyPage/MyPageCardList/MyPageCard';
import * as P from '@/components/MyPage/MyPageCardList/MyPageCard/styles';
import defaultPortfolioThumbnailSrc from '@/assets/webps/MyPage/defaultPortfolioThumbnail.webp';
import defaultProjectThumbnailSrc from '@/assets/webps/MyPage/defaultProjectThumbnail.webp';
import { useState, useEffect } from 'react';
import { instance } from '@/apis/instance';
import { useParams, useNavigate } from 'react-router-dom';

interface MyPageCardListProps {
  activeTab: 'allProjects' | 'portfolio';
  selectedFilter: string; // 추가된 필터 정보
}

interface Project {
  id: number;
  title: string;
  liked_count: number;
  comment_count: number;
  thumbnail: string | null;
}

interface Portfolio {
  id: number;
  title: string;
  thumbnail: string | null;
}

const MyPageCardList: React.FC<MyPageCardListProps> = ({ activeTab, selectedFilter }) => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [likedProjects, setLikedProjects] = useState<Project[]>([]);
  const [commentedProjects, setCommentedProjects] = useState<Project[]>([]);
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]); // 현재 렌더링 중인 프로젝트
  const navigate = useNavigate();
  const { user_id } = useParams<{ user_id: string }>();
  const loginUserId = localStorage.getItem('user_id');
  const isMyProfile = user_id === loginUserId;

  // 다른 사람이 작성한 프로젝트
  const fetchUserProjects = async () => {
    try {
      const response = await instance.get(`pofolo/projects/watch/${user_id}/`); // API 호출
      setDisplayedProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 다른 사람이 작성한 포트폴리오
  const fetchUserPortfolios = async () => {
    try {
      const response = await instance.get(`pofolo/portfolios/watch/${user_id}/`); // API 호출
      setPortfolios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 내가 작성한 프로젝트
  const fetchMyProject = async () => {
    try {
      const response = await instance.get('/pofolo/projects/myproject/'); // API 호출
      setAllProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 내가 작성한 포트폴리오
  const fetchMyPortfolio = async () => {
    try {
      const response = await instance.get('/pofolo/portfolios/'); // API 호출
      setPortfolios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 내가 좋아요한 프로젝트
  const fetchLikedProjects = async () => {
    try {
      const response = await instance.get('/pofolo/projects/liked/'); // API 호출
      setLikedProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 내가 댓글 단 프로젝트
  const fetchCommentedProjects = async () => {
    try {
      const response = await instance.get('/pofolo/projects/commented/'); // API 호출
      setCommentedProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isMyProfile && activeTab === 'allProjects') {
      if (selectedFilter === '내 프로젝트') {
        setDisplayedProjects(allProjects);
      } else if (selectedFilter === '좋아요한 프로젝트') {
        setDisplayedProjects(likedProjects);
      } else if (selectedFilter === '댓글 단 프로젝트') {
        setDisplayedProjects(commentedProjects);
      }
    }
  }, [activeTab, selectedFilter, allProjects, likedProjects, commentedProjects]);

  useEffect(() => {
    if (isMyProfile) {
      fetchMyProject();
      fetchMyPortfolio();
      fetchLikedProjects();
      fetchCommentedProjects();
    } else {
      fetchUserProjects();
      fetchUserPortfolios();
    }
  }, []);

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const handlePortfolioClick = (portfolioId: number) => {
    navigate(`/portfolio/${portfolioId}`);
  };

  return (
    <S.CardListColorContainer>
      <S.CardListContainer $isPortfolioTab={activeTab === 'portfolio'}>
        {activeTab === 'allProjects'
          ? displayedProjects.map((project) => (
              <div key={project.id} onClick={() => handleProjectClick(project.id)}>
                <Card
                  imageUrl={project.thumbnail || defaultProjectThumbnailSrc}
                  projectName={project.title}
                  likes={project.liked_count}
                  comments={project.comment_count}
                />
              </div>
            ))
          : portfolios.map((portfolio) => (
              <div key={portfolio.id} onClick={() => handlePortfolioClick(portfolio.id)}>
                <P.PortfolioCard>
                  <P.PortfolioCardImg
                    src={portfolio.thumbnail || defaultPortfolioThumbnailSrc}
                    alt={portfolio.title}
                  />
                  <P.ProjectName>{portfolio.title}</P.ProjectName>
                </P.PortfolioCard>
              </div>
            ))}
      </S.CardListContainer>
    </S.CardListColorContainer>
  );
};

export default MyPageCardList;
