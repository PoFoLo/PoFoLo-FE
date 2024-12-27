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

interface ProjectContentProps {
  onCommentClick: () => void;
  commentCount: number; // 댓글 개수 prop 추가
}

export const ProjectContent: React.FC<ProjectContentProps> = ({ onCommentClick, commentCount }) => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [writerProfile, setWriterProfile] = useState<{
    nickname: string;
    education: string;
    profileImg: string;
  }>({
    nickname: '',
    education: '',
    profileImg: profileIcon, // 기본 이미지 초기화
  });
  const [isFixed, setIsFixed] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10);
  const { isPC } = useResponsive();
  const { project_id } = useParams<{ project_id: string }>(); // URL 파라미터에서 project_id 가져오기
  const nav = useNavigate();
  const projectContainerRef = useRef<HTMLDivElement | null>(null);
  const floatingButtonRef = useRef<HTMLDivElement | null>(null);

  const fetchProjectData = async () => {
    try {
      const response = await instance.get(`/pofolo/projects/${project_id}/`);
      const data = response.data;

      // links 객체를 배열로 변환
      const formattedLinks = Object.entries(data.links).map(([title, url]) => ({
        title,
        url,
      }));

      setProjectData({
        ...data,
        links: formattedLinks,
      });
      setLikeCount(data.liked_count);
    } catch (error) {
      console.error('프로젝트 데이터를 가져오는 중 오류 발생:', error);
      nav('/'); // 오류 발생 시 홈으로 이동
    }
  };

  const fetchLikeStatus = async () => {
    try {
      const response = await instance.get('/pofolo/projects/liked/');
      const likedProjects = response.data; // 내가 좋아요 누른 프로젝트 ID 리스트

      if (
        project_id &&
        likedProjects.some((project: { id: number }) => project.id === Number(project_id))
      ) {
        setIsLiked(true); // 현재 프로젝트에 좋아요 누른 상태로 설정
      } else {
        setIsLiked(false); // 좋아요를 누르지 않은 상태로 설정
      }
    } catch (error) {
      console.error('좋아요 상태를 가져오는 중 오류 발생:', error);
      setIsLiked(false); // 오류 발생 시 기본 상태로 초기화
    }
  };

  const handleLikeClick = async () => {
    try {
      // 서버에 요청 보내기 전에 좋아요 상태 및 좋아요 수 즉시 반영
      setIsLiked((prevIsLiked) => {
        setLikeCount((prevCount) => (prevIsLiked ? prevCount - 1 : prevCount + 1));
        return !prevIsLiked;
      });

      const response = await instance.post(`/pofolo/projects/${project_id}/like/`);

      if (response.data.message === 'Like added') {
        setIsLiked(true);
      } else if (response.data.message === 'Like removed') {
        setIsLiked(false);
      }

      // 서버에서 최신 데이터를 가져와 동기화
      const updatedData = await instance.get(`/pofolo/projects/${project_id}/`);
      setLikeCount(updatedData.data.liked_count);
    } catch (error) {
      console.error('좋아요 처리 중 오류 발생:', error);

      // 서버 요청 실패 시 상태 복구
      setIsLiked((prevIsLiked) => {
        setLikeCount((prevCount) => (prevIsLiked ? prevCount + 1 : prevCount - 1));
        return !prevIsLiked;
      });
    }
  };

  const fetchWriterProfile = async (user_id: number) => {
    try {
      const response = await instance.get(`/pofolo/users/profile/${user_id}/`);
      const { nickname, education, profile_img } = response.data.profile;

      setWriterProfile({
        nickname,
        education,
        profileImg: profile_img || profileIcon, // 기본 이미지 대체
      });
    } catch (error) {
      console.error('작성자 프로필 조회 중 오류 발생:', error);
      setWriterProfile({
        nickname: '',
        education: '',
        profileImg: profileIcon, // 기본 이미지
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProjectData();
      await fetchLikeStatus(); // 프로젝트 데이터 이후 좋아요 상태 확인
    };
    fetchData();
  }, [project_id]);

  useEffect(() => {
    if (projectData?.writer) {
      fetchWriterProfile(projectData.writer);
    }
  }, [project_id, nav]);

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
            <img onClick={() => nav('/mypage')} src={writerProfile.profileImg} alt="profile icon" />
            <C.ProfileContent>
              <p onClick={() => nav('/mypage')} className="nickname">
                {writerProfile.nickname}
              </p>
              <p className="school">{writerProfile.education}</p>
            </C.ProfileContent>
          </C.ProfileInfo>

          <C.Date>
            {new Date(projectData.created_at).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </C.Date>
        </C.TopInfo>

        <C.BodyText>
          <S.Title>{projectData.title}</S.Title>
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
            onClick={handleLikeClick}
            $isPC={isPC}
            $isLiked={isLiked}
            $likeCount={likeCount}
          >
            <img src={isLiked ? likeRed : like} alt="like" className={isLiked ? 'liked' : ''} />
            <span>{projectData.liked_count}</span>
          </S.LikeButton>
          <S.CommentButton onClick={onCommentClick} $isPC={isPC} $commentCount={commentCount}>
            <img src={comment} alt="comment" />
            <span>{projectData.comment_count}</span>
          </S.CommentButton>
        </S.FloatingButtonWrapper>
      </C.Container>
    </>
  );
};
