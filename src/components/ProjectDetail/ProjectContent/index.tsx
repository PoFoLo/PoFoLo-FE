import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useResponsive } from '@/hooks/useResponsive';
import { instance } from '@/apis/instance';
import { ProjectData } from '@/components/ProjectDetail/ProjectContent/dto';
import * as S from '@/components/ProjectDetail/ProjectContent/styles';
import * as C from '@/components/Common/Detail/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import linkIcon from '@/assets/webps/Common/link.webp';
import like from '@/assets/svgs/ProjectDetail/like.svg';
import likeRed from '@/assets/svgs/ProjectDetail/likeRed.svg';
import comment from '@/assets/svgs/ProjectDetail/comment.svg';
import projectDefault from '@/assets/webps/Common/projectDefault.webp';
import Button from '@/components/Common/Button';

interface ProjectContentProps {
  onCommentClick: () => void;
  commentCount: number;
}

export const ProjectContent: React.FC<ProjectContentProps> = ({ onCommentClick, commentCount }) => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [writerProfile, setWriterProfile] = useState<{
    id: number;
    nickname: string;
    education: string;
    education_is_public: boolean;
    profileImg: string;
  }>({
    id: 0,
    nickname: '',
    education: '',
    education_is_public: true,
    profileImg: profileIcon, // 기본 이미지 초기화
  });
  const [isFixed, setIsFixed] = useState(true);
  const { isPC } = useResponsive();
  const { project_id } = useParams<{ project_id: string }>(); // URL 파라미터에서 project_id 가져오기
  const nav = useNavigate();
  const projectContainerRef = useRef<HTMLDivElement | null>(null);
  const floatingButtonRef = useRef<HTMLDivElement | null>(null);

  const fetchLikeStatus = async () => {
    try {
      // 좋아요한 프로젝트 리스트 가져오기
      const likedResponse = await instance.get('/pofolo/projects/liked/');
      const likedProjects = likedResponse.data.map((project: { id: number }) => project.id);

      // 현재 프로젝트의 좋아요 상태 확인
      setIsLiked(likedProjects.includes(Number(project_id)));

      // 현재 프로젝트의 좋아요 수 가져오기
      const projectResponse = await instance.get(`/pofolo/projects/${project_id}/`);
      setLikeCount(projectResponse.data.liked_count);
    } catch (error) {
      console.error('좋아요 상태 또는 카운트 가져오기 실패:', error);
    }
  };

  const fetchProjectData = async () => {
    try {
      const response = await instance.get(`/pofolo/projects/${project_id}/`);
      const data = response.data;

      setProjectData(data);
      setLikeCount(data.liked_count);
      setIsLiked(data.is_liked);

      const formattedLinks = Object.entries(data.links).map(([title, url]) => ({
        title,
        url,
      }));

      setProjectData({ ...data, links: formattedLinks });
    } catch (error) {
      console.error('프로젝트 데이터를 가져오는 중 오류 발생:', error);
      nav('/');
    }
  };

  const handleLikeToggle = async () => {
    try {
      // UI에서 즉시 반영
      setIsLiked((prev) => !prev);
      setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));

      // 서버로 좋아요 토글 요청
      await instance.post(`/pofolo/projects/${project_id}/like/`);
    } catch (error) {
      console.error('좋아요 토글 실패:', error);
      // 실패 시 이전 상태 복구
      setIsLiked((prev) => !prev);
      setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
    }
  };

  const fetchWriterProfile = async (user_id: number) => {
    try {
      const response = await instance.get(`/pofolo/users/profile/${user_id}/`);
      const { id, nickname, education, education_is_public, profile_img_url } =
        response.data.profile;

      setWriterProfile({
        id,
        nickname,
        education,
        education_is_public,
        profileImg: profile_img_url || profileIcon, // 기본 이미지 대체
      });
    } catch (error) {
      console.error('작성자 프로필 조회 중 오류 발생:', error);
      setWriterProfile({
        id: 0,
        nickname: '',
        education: '',
        education_is_public: true,
        profileImg: profileIcon, // 기본 이미지
      });
    }
  };

  const handleDeleteProject = async (projectId: string, nav: (path: string) => void) => {
    const confirmDelete = window.confirm('프로젝트를 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await instance.delete(`/pofolo/projects/${projectId}/`);
        nav('/home'); // 삭제 성공 시 홈으로 이동
      } catch (error) {
        console.error('프로젝트 삭제 중 오류 발생:', error);
        alert('프로젝트를 삭제하는 데 실패했습니다.');
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProjectData(); // 프로젝트 데이터 가져오기
      } catch (error) {
        console.error('프로젝트 데이터 가져오기 실패:', error);
      }
    };

    fetchData();
  }, [project_id]);

  useEffect(() => {
    const fetchWriterData = async () => {
      if (projectData?.writer) {
        try {
          await fetchWriterProfile(projectData.writer); // 작성자 프로필 가져오기
        } catch (error) {
          console.error('작성자 프로필 가져오기 실패:', error);
        }
      }
    };

    fetchWriterData();
  }, [projectData]); // projectData가 변경될 때 작성자 정보를 가져옴

  useEffect(() => {
    fetchLikeStatus();
  }, [project_id]);

  // 플로팅 버튼 고정
  useEffect(() => {
    const handleScroll = () => {
      if (projectContainerRef.current && floatingButtonRef.current) {
        const projectBottom = projectContainerRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        const buttonHeight = floatingButtonRef.current.offsetHeight;

        if (projectBottom > viewportHeight - buttonHeight + 48) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 설정을 위해 호출

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!projectData) return <p>로딩 중...</p>;

  return (
    <>
      <C.ImgContainer>
        <ScrollContainer className="scroll-container" horizontal>
          {(projectData.project_img.length > 0 ? projectData.project_img : [projectDefault]).map(
            (imgSrc, index) => (
              <C.ImageWrapper key={index}>
                <img src={imgSrc} alt={`image-${index}`} />
              </C.ImageWrapper>
            )
          )}
        </ScrollContainer>
      </C.ImgContainer>
      <C.Container ref={projectContainerRef}>
        <C.TopInfo>
          <C.ProfileInfo>
            <img
              onClick={() => nav(`/mypage/${writerProfile.id}`)}
              src={writerProfile.profileImg}
              alt="profile icon"
            />
            <C.ProfileContent>
              <p onClick={() => nav(`/mypage/${writerProfile.id}`)} className="nickname">
                {writerProfile.nickname}
              </p>
              {writerProfile.education_is_public === true && (
                <p className="school">{writerProfile.education}</p>
              )}
            </C.ProfileContent>
          </C.ProfileInfo>

          <S.RightWrapper>
            <C.Date>
              {new Date(projectData.created_at).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </C.Date>
            {isPC && Number(localStorage.getItem('user_id')) === projectData.writer && (
              <div className="menu-wrapper">
                <Button
                  size="small"
                  type="obscure"
                  onClick={() => handleDeleteProject(project_id as string, nav)}
                >
                  삭제
                </Button>
                <Button size="small" type="sub" onClick={() => nav(`/project/edit/${project_id}`)}>
                  편집
                </Button>
              </div>
            )}
          </S.RightWrapper>
        </C.TopInfo>

        <C.BodyText>
          <div className="top-bar">
            <S.Title>{projectData.title}</S.Title>

            <S.RightWrapper>
              {!isPC && Number(localStorage.getItem('user_id')) === projectData.writer && (
                <div className="menu-wrapper">
                  <Button
                    size="small2"
                    type="obscure"
                    onClick={() => handleDeleteProject(project_id as string, nav)}
                  >
                    삭제
                  </Button>
                  <Button
                    size="small2"
                    type="sub"
                    onClick={() => nav(`/project/edit/${project_id}`)}
                  >
                    편집
                  </Button>
                </div>
              )}
            </S.RightWrapper>
          </div>

          <S.FieldButton $majorField={projectData.major_field}>
            <span>{projectData.sub_field}</span>
          </S.FieldButton>

          <C.Article>
            <h2>소개</h2>
            <span>{projectData.description}</span>
          </C.Article>

          <C.Article>
            <h2>주요 스킬</h2>
            <span>{projectData.skills}</span>
          </C.Article>

          {projectData.links.length > 0 && (
            <C.Article>
              <h2>링크</h2>

              <S.LinkList>
                <ScrollContainer className="scroll-container" horizontal>
                  {projectData.links.map((link, index) => (
                    <S.LinkContainer
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkIcon} alt="link icon" />
                      <S.LinkBox>
                        <p className="link-title">{link.title}</p>
                        <p className="web-address"> {link.url} </p>
                      </S.LinkBox>
                    </S.LinkContainer>
                  ))}
                </ScrollContainer>
              </S.LinkList>
            </C.Article>
          )}
        </C.BodyText>

        {/* 플로팅 버튼 */}
        <S.FloatingButtonWrapper ref={floatingButtonRef} className={isFixed ? 'fixed' : 'absolute'}>
          <S.LikeButton
            onClick={handleLikeToggle}
            $isPC={isPC}
            $isLiked={isLiked}
            $likeCount={likeCount}
          >
            <img src={isLiked ? likeRed : like} alt="like" className={isLiked ? 'liked' : ''} />
            <span>{likeCount}</span>
          </S.LikeButton>
          <S.CommentButton onClick={onCommentClick} $isPC={isPC} $commentCount={commentCount}>
            <img src={comment} alt="comment" />
            <span>{commentCount}</span>
          </S.CommentButton>
        </S.FloatingButtonWrapper>
      </C.Container>
    </>
  );
};
