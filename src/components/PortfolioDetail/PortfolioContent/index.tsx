import { useNavigate } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';
import * as S from '@/components/PortfolioDetail/PortfolioContent/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import linkGray from '@/assets/webps/Common/link.webp';
import linkBlue from '@/assets/webps/PortfolioDetail/linkBlue.webp';
import projectImg1 from '@/assets/webps/ProjectDetail/projectImg1.webp';
import projectImg2 from '@/assets/webps/ProjectDetail/projectImg2.webp';
import projectImg3 from '@/assets/webps/ProjectDetail/projectImg3.webp';
import Button from '@/components/Common/Button';
import { useState } from 'react';

export const PortfolioContent = () => {
  const [isCopied, setIsCopied] = useState(false);
  const nav = useNavigate();
  const images = [
    { src: projectImg1, writer: '홍길동', title: '첫 번째 프로젝트' },
    { src: projectImg2, writer: '김철수', title: '두 번째 프로젝트' },
    { src: projectImg3, writer: '이영희', title: '세 번째 프로젝트' },
  ];

  const handleLinkCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <>
      <S.ImgContainer>
        <ScrollContainer className="scroll-container" horizontal>
          {images.map((project, index) => (
            <S.ImageWrapper key={index} onClick={() => nav('/project/:projectId')}>
              <S.ImageItem key={index} src={project.src} alt={`image-${index}`} />
              <S.ImageOverlay>
                <S.OverlayText>
                  <p className="writer">{project.writer}</p>
                  <p className="title">{project.title}</p>
                </S.OverlayText>
              </S.ImageOverlay>
            </S.ImageWrapper>
          ))}
        </ScrollContainer>
      </S.ImgContainer>
      <S.PortfolioContainer>
        <S.TopInfo>
          <S.ProfileInfo>
            <img onClick={() => nav('/mypage')} src={profileIcon} alt="profile icon" />
            <S.ProfileContent>
              <p onClick={() => nav('/mypage')} className="nickname">
                홍길동
              </p>
              <p className="school">홍익대학교 컴퓨터공학과</p>
            </S.ProfileContent>
          </S.ProfileInfo>
          <S.RightWrapper>
            <S.Date>2024년 12월 30일</S.Date>
            <div className="button">
              <Button size="small" type="obscure">
                삭제
              </Button>
              <Button size="small" type="sub">
                편집
              </Button>
            </div>
          </S.RightWrapper>
        </S.TopInfo>

        <S.BodyText>
          <S.LeftWrapper>
            <S.Title>홍길동의 포트폴리오</S.Title>
            <S.Link onClick={handleLinkCopy} isCopied={isCopied}>
              <img src={isCopied ? linkBlue : linkGray} alt="link" />
              <span>{isCopied ? '복사됨' : '링크 복사'}</span>
            </S.Link>
          </S.LeftWrapper>
          <S.Article>
            <h2>소개</h2>
            <span>
              {`인류는 수천 년에 걸쳐 풍부하고 다채로운 문화를 발전시켜 왔습니다. 언어, 예술, 전통, 신화 등은 각기 다른 문화권에서 독특하게 꽃피며 그들만의 정체성을 형성했습니다. 인간은 자신의 이야기를 남기고자 하는 열망을 가지고 있으며, 이러한 흔적들은 우리가 현재를 살아가며 과거를 이해하고 미래를 예측하는 데 중요한 역할을 합니다.`}
            </span>
          </S.Article>

          <S.Article>
            <h2>경력</h2>
            <ul>
              <li>가 회사 인턴 (2022.7. - 2023.4.)</li>
              <li>나 대학교 학회 (2021.7. - 2023.3.)</li>
            </ul>
          </S.Article>

          <S.Article>
            <h2>주요 스킬</h2>
            <span>Photoshop, Illustrator, Fimga, Protopie</span>
          </S.Article>
        </S.BodyText>
      </S.PortfolioContainer>
    </>
  );
};
