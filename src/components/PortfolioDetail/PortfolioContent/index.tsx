import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useResponsive } from '@/hooks/useResponsive';
import Button from '@/components/Common/Button';
import * as S from '@/components/PortfolioDetail/PortfolioContent/styles';
import * as C from '@/components/Common/Detail/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import linkGray from '@/assets/webps/Common/link.webp';
import linkBlue from '@/assets/webps/PortfolioDetail/linkBlue.webp';
import { PortfolioData } from '@/components/PortfolioDetail/PortfolioContent/dto';
import { instance } from '@/apis/instance';

export const PortfolioContent = () => {
  const userId = localStorage.getItem('user_id');
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { isPC, isTab, isPhone } = useResponsive();
  const { portfolio_id } = useParams<{ portfolio_id: string }>();
  const nav = useNavigate();

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await instance.get(`/pofolo/portfolios/${portfolio_id}/`);
        setPortfolioData(response.data);
      } catch (error) {
        console.error('포트폴리오 데이터를 가져오는 중 오류 발생:', error);
        nav(-1);
      }
    };

    fetchPortfolioData();
  }, [portfolio_id, nav]);

  const handleLinkCopy = () => {
    if (portfolioData?.invite_url) {
      navigator.clipboard.writeText(portfolioData.invite_url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  if (!portfolioData) return <p>로딩 중...</p>;

  const handleDeletePortfolio = async () => {
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
  return (
    <>
      <C.ImgContainer>
        <ScrollContainer className="scroll-container" horizontal>
          {portfolioData.related_projects.map((projectId, index) => (
            <C.ImageWrapper key={index} onClick={() => nav(`/project/${projectId}`)}>
              <img src={`/images/project-${projectId}.jpg`} alt={`project-${projectId}`} />
              <S.ImageOverlay>
                <S.OverlayText>
                  <p className="writer">작성잘ㄹ</p>
                  <p className="title">제목</p>
                </S.OverlayText>
              </S.ImageOverlay>
            </C.ImageWrapper>
          ))}
        </ScrollContainer>
      </C.ImgContainer>
      <C.Container>
        <C.TopInfo>
          <C.ProfileInfo>
            <img onClick={() => nav('/mypage')} src={profileIcon} alt="profile icon" />
            <C.ProfileContent>
              <p onClick={() => nav('/mypage')} className="nickname">
                홍길동
              </p>
              <p className="school">홍익대학교 컴퓨터공학과</p>
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
            {isPC && Number(userId) === portfolioData.writer && (
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
              {!isPhone && (
                <S.Link onClick={handleLinkCopy} $isCopied={isCopied}>
                  <img src={isCopied ? linkBlue : linkGray} alt="link" />
                  <span>{isCopied ? '복사됨' : '링크 복사'}</span>
                </S.Link>
              )}
            </div>
            {isTab && Number(userId) === portfolioData.writer && (
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
          {isPhone && (
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
            <ul>
              <li>가 회사 인턴 (2022.7. - 2023.4.)</li>
              <li>나 대학교 학회 (2021.7. - 2023.3.)</li>
            </ul>
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
