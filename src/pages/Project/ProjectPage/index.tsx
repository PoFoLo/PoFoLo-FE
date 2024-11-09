import * as S from '@/pages/Project/ProjectPage/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import link from '@/assets/webps/Common/link.webp';
import { useNavigate } from 'react-router-dom';

export const ProjectPage = () => {
  const nav = useNavigate();

  return (
    <S.Layout>
      <S.ProjectContainer>
        <S.ImgContainer>이미지 들어갈 곳</S.ImgContainer>

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
              <S.LinkContainer>
                <img src={link} alt="link icon" />
                <S.LinkBox>
                  <p className="link-title">BEGIN AGAIN 82小红书...</p>
                  <p className="web-address">behance.net/</p>
                </S.LinkBox>
              </S.LinkContainer>
              <S.LinkContainer>
                <img src={link} alt="link icon" />
                <S.LinkBox>
                  <p className="link-title">홍길동의 외부링크 - Sitename</p>
                  <p className="web-address">linkname.link</p>
                </S.LinkBox>
              </S.LinkContainer>
            </S.LinkList>
          </S.Article>
        </S.BodyText>
      </S.ProjectContainer>
    </S.Layout>
  );
};
