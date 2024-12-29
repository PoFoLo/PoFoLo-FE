import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useResponsive } from '@/hooks/useResponsive';
import { instance } from '@/apis/instance';
import { PortfolioData, RelatedProject } from '@/components/PortfolioDetail/PortfolioContent/dto';
import Button from '@/components/Common/Button';
import * as S from '@/components/PortfolioDetail/PortfolioContent/styles';
import * as C from '@/components/Common/Detail/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import linkGray from '@/assets/webps/Common/link.webp';
import linkBlue from '@/assets/webps/PortfolioDetail/linkBlue.webp';
import projectDefault from '@/assets/webps/Common/projectDefault.webp';

export const PortfolioContent = () => {
  const userId = localStorage.getItem('user_id');
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<RelatedProject[]>([]);
  const [writerInfo, setWriterInfo] = useState({
    id: 0,
    nickname: '',
    education: '',
    education_is_public: true,
    profileImg: profileIcon,
  });
  const [isCopied, setIsCopied] = useState(false);
  const { isPC, isTab, isPhone } = useResponsive();
  const { portfolio_id, uuid } = useParams<{ portfolio_id?: string; uuid?: string }>();
  const nav = useNavigate();
  const isInvitePage = location.pathname.includes(`/invite/${uuid}`);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        let response;

        if (isInvitePage && uuid) {
          // 초대 페이지일 경우
          response = await instance.get(`/pofolo/portfolios/invite/${uuid}/`);
        } else if (portfolio_id) {
          // 일반 포트폴리오 페이지
          response = await instance.get(`/pofolo/portfolios/${portfolio_id}/`);
        } else {
          throw new Error('잘못된 페이지 요청');
        }

        setPortfolioData(response.data);
      } catch (error) {
        console.error('포트폴리오 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchPortfolioData();
  }, [portfolio_id, nav, isInvitePage]);

  useEffect(() => {
    const fetchRelatedProjects = async () => {
      if (!portfolioData?.related_projects) return;

      try {
        const fetchedProjects = await Promise.all(
          portfolioData.related_projects.map(async (projectId: number) => {
            const response = await instance.get(`/pofolo/projects/${projectId}/`);
            const projectData = response.data;
            return {
              id: projectData.id,
              writer: projectData.writer,
              title: projectData.title,
              project_img: projectData.project_img || projectDefault,
            };
          })
        );
        setRelatedProjects(fetchedProjects);
      } catch (error) {
        console.error('관련 프로젝트 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchRelatedProjects();
  }, [portfolioData]);

  useEffect(() => {
    const fetchWriterInfo = async () => {
      if (!portfolioData?.writer) return;

      try {
        const response = await instance.get(`/pofolo/users/profile/${portfolioData.writer}/`);
        const { id, nickname, education, education_is_public, profile_img } = response.data.profile;
        console.log('작성자 정보:', response.data.profile);
        setWriterInfo({
          id,
          nickname,
          education,
          education_is_public,
          profileImg: profile_img || profileIcon, // 프로필 이미지가 없으면 기본 이미지
        });
      } catch (error) {
        console.error('작성자 정보 가져오기 실패:', error);
      }
    };

    if (portfolioData) fetchWriterInfo();
  }, [portfolioData]);

  const handleLinkCopy = () => {
    if (portfolioData?.invite_url) {
      navigator.clipboard.writeText(
        `http://localhost:3000/portfolio/invite/${portfolioData.invite_url}` // to do : 배포 이후 수정
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  const handleDeletePortfolio = async () => {
    if (!portfolioData) return;

    const confirmDelete = window.confirm('정말로 이 포트폴리오를 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await instance.delete(`/pofolo/portfolios/${portfolioData.id}/`);
        nav(`/mypage/${userId}`);
      } catch (error) {
        console.error('포트폴리오 삭제 중 오류 발생:', error);
        alert('포트폴리오 삭제에 실패했습니다.');
      }
    }
  };

  useEffect(() => {
    console.log('Portfolio Data:', portfolioData);
  }, [portfolioData]);

  useEffect(() => {
    console.log('Writer Info:', writerInfo);
  }, [writerInfo]);

  if (!portfolioData) return <p>로딩 중...</p>;

  return (
    <>
      <C.ImgContainer>
        <ScrollContainer className="scroll-container" horizontal>
          {relatedProjects.map((project) => (
            <C.ImageWrapper key={project.id} onClick={() => nav(`/project/${project.id}`)}>
              <img src={project.project_img[0] || projectDefault} alt={`project-${project.id}`} />
              <S.ImageOverlay>
                <S.OverlayText>
                  <p className="writer">{writerInfo.nickname}</p>
                  <p className="title">{project.title}</p>
                </S.OverlayText>
              </S.ImageOverlay>
            </C.ImageWrapper>
          ))}
        </ScrollContainer>
      </C.ImgContainer>
      <C.Container>
        <C.TopInfo>
          <C.ProfileInfo>
            <img
              onClick={() => nav(`/mypage/${writerInfo.id}`)}
              src={writerInfo.profileImg}
              alt="profile icon"
            />
            <C.ProfileContent>
              <p onClick={() => nav(`/mypage/${writerInfo.id}`)} className="nickname">
                {portfolioData.username}
              </p>
              {writerInfo.education_is_public === true && (
                <p className="school">{writerInfo.education}</p>
              )}
            </C.ProfileContent>
          </C.ProfileInfo>
          <S.RightWrapper>
            <C.Date>
              {new Date(portfolioData.created_at).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </C.Date>
            {!isInvitePage && isPC && Number(userId) === portfolioData.writer && (
              <div className="button">
                <Button size="small" type="obscure" onClick={handleDeletePortfolio}>
                  삭제
                </Button>
                <Button
                  size="small"
                  type="sub"
                  onClick={() => nav(`/portfolio/edit/${portfolioData.id}`)}
                >
                  편집
                </Button>
              </div>
            )}
          </S.RightWrapper>
        </C.TopInfo>

        <C.BodyText>
          <S.LeftWrapper>
            <div className="left-contents">
              <S.Title>{portfolioData.title}</S.Title>
              {!isInvitePage && !isPhone && (
                <S.Link onClick={handleLinkCopy} $isCopied={isCopied}>
                  <img src={isCopied ? linkBlue : linkGray} alt="link" />
                  <span>{isCopied ? '복사됨' : '링크 복사'}</span>
                </S.Link>
              )}
            </div>
            {!isInvitePage && isTab && Number(userId) === portfolioData.writer && (
              <div className="button">
                <Button size="small2" type="obscure" onClick={handleDeletePortfolio}>
                  삭제
                </Button>
                <Button
                  size="small2"
                  type="sub"
                  onClick={() => nav(`/portfolio/edit/${portfolioData.id}`)}
                >
                  편집
                </Button>
              </div>
            )}
          </S.LeftWrapper>
          {!isInvitePage && isPhone && (
            <S.PhoneButtons>
              <S.Link onClick={handleLinkCopy} $isCopied={isCopied}>
                <img src={isCopied ? linkBlue : linkGray} alt="link" />
                <span>{isCopied ? '복사됨' : '링크 복사'}</span>
              </S.Link>
              {Number(userId) === portfolioData.writer && (
                <div className="button">
                  <Button size="small2" type="obscure" onClick={handleDeletePortfolio}>
                    삭제
                  </Button>
                  <Button
                    size="small2"
                    type="sub"
                    onClick={() => nav(`/portfolio/edit/${portfolioData.id}`)}
                  >
                    편집
                  </Button>
                </div>
              )}
            </S.PhoneButtons>
          )}

          <C.Article>
            <h2>소개</h2>
            <span>{portfolioData.description}</span>
          </C.Article>

          <C.Article>
            <h2>경력</h2>
            {portfolioData.experiences && portfolioData.experiences.length > 0 && (
              <ul>
                {portfolioData.experiences.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
            )}
          </C.Article>

          <C.Article>
            <h2>주요 스킬</h2>
            <span>{portfolioData.skills}</span>
          </C.Article>
        </C.BodyText>
      </C.Container>
    </>
  );
};
