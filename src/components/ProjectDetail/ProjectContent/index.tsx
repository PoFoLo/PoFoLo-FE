import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';
import * as S from '@/components/ProjectDetail/ProjectContent/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import linkIcon from '@/assets/webps/Common/link.webp';
import projectImg1 from '@/assets/webps/ProjectDetail/projectImg1.webp';
import projectImg2 from '@/assets/webps/ProjectDetail/projectImg2.webp';
import projectImg3 from '@/assets/webps/ProjectDetail/projectImg3.webp';
import like from '@/assets/svgs/ProjectDetail/like.svg';
import likeRed from '@/assets/svgs/ProjectDetail/likeRed.svg';
import comment from '@/assets/svgs/ProjectDetail/comment.svg';

interface ProjectContentProps {
  onCommentClick: () => void;
  commentCount: number; // 댓글 개수 prop 추가
}

const links = [
  { title: 'BEGIN AGAIN 82小红书...', url: 'behance.net/' },
  { title: '홍길동의 외부링크 - Sitename', url: 'linkname.link' },
  { title: 'BEGIN AGAIN 82小红书...', url: 'behance.net/' },
  { title: '홍길동의 외부링크 - Sitename', url: 'linkname.link' },
  { title: 'BEGIN AGAIN 82小红书...', url: 'behance.net/' },
  { title: '홍길동의 외부링크 - Sitename', url: 'linkname.link' },
];

export const ProjectContent: React.FC<ProjectContentProps> = ({ onCommentClick, commentCount }) => {
  const [isFixed, setIsFixed] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10);
  const nav = useNavigate();
  const images = [projectImg1, projectImg2, projectImg3];
  const projectContainerRef = useRef<HTMLDivElement | null>(null);
  const floatingButtonRef = useRef<HTMLDivElement | null>(null);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

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

  return (
    <>
      <S.ImgContainer>
        <ScrollContainer className="scroll-container" horizontal>
          {images.map((imgSrc, index) => (
            <S.ImageItem key={index} src={imgSrc} alt={`image-${index}`} />
          ))}
        </ScrollContainer>
      </S.ImgContainer>
      <S.ProjectContainer ref={projectContainerRef}>
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
          <S.Date>2024년 12월 30일</S.Date>
        </S.TopInfo>

        <S.BodyText>
          <S.Title>BEGIN AGAIN 82小红书日</S.Title>
          <S.FieldButton>
            <span>프론트엔드</span>
          </S.FieldButton>

          <S.Article>
            <h2>소개</h2>
            <span>
              {`In 2024, Xiaohongshu celebrated its 11th anniversary. Over the past decade, the platform has brought together many life-loving, sincere, and friendly REDers.
Thanks to these vibrant individuals, we can find like-minded people, gradually forming a community, a city, and various beautiful spaces to gather. Together, we face challenges, share joy, and grow.
For this 11th anniversary, our theme is “BEGIN AGAIN.” We hope everyone can start anew, discovering and exploring more life inspirations, and together, embrace a brighter future.
This design is based on the theme “BEGIN AGAIN,” showcasing a variety of letter styles and vibrant colors. Additionally, the summer elements of ‘82’ are personified, symbolizing constant forward movement. The blend of fun and symbolism signifies the continuous evolution and progress of Xiaohongshu.`}
            </span>
          </S.Article>

          <S.Article>
            <h2>주요 스킬</h2>
            <span>Photoshop, Illustrator, Figma</span>
          </S.Article>

          <S.Article>
            <h2>링크</h2>

            <S.LinkList>
              <ScrollContainer className="scroll-container" horizontal>
                {links.map((link, index) => (
                  <S.LinkContainer key={index}>
                    <img src={linkIcon} alt="link icon" />
                    <S.LinkBox>
                      <p className="link-title">{link.title}</p>
                      <p className="web-address">{link.url}</p>
                    </S.LinkBox>
                  </S.LinkContainer>
                ))}
              </ScrollContainer>
            </S.LinkList>
          </S.Article>
        </S.BodyText>

        {/* 플로팅 버튼 */}
        <S.FloatingButtonWrapper ref={floatingButtonRef} className={isFixed ? 'fixed' : 'absolute'}>
          <S.LikeButton onClick={handleLikeClick} $isLiked={isLiked} $likeCount={likeCount}>
            <img src={isLiked ? likeRed : like} alt="like" className={isLiked ? 'liked' : ''} />
            <span>{likeCount}</span>
          </S.LikeButton>
          <S.CommentButton $commentCount={commentCount} onClick={onCommentClick}>
            <img src={comment} alt="comment" />
            <span>{commentCount}</span>
          </S.CommentButton>
        </S.FloatingButtonWrapper>
      </S.ProjectContainer>
    </>
  );
};
