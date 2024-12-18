import * as S from '@/components/MyPage/Profile/styles';
import defaultProfileSrc from '@/assets/webps/MyPage/defaultProfile.webp';
import offerIconSrc from '@/assets/webps/MyPage/offerIcon.webp';
import emailIconSrc from '@/assets/webps/MyPage/emailIcon.webp';
import phoneIconSrc from '@/assets/webps/MyPage/phoneIcon.webp';
import linkIconSrc from '@/assets/webps/MyPage/linkIcon.webp';

const Profile = () => {
  return (
    <S.ProfileLayout>
      <S.ProfileHeader>
        <S.ProfilePic src={defaultProfileSrc} alt="defaultProfile" />
        <S.ProfileInfo>
          <S.NameAndBadgesContainer>
            <S.Name>홍길동</S.Name>
            <S.BadgesContainer>
              <S.OfferBtnContainer>
                <S.OfferBtnIcon src={offerIconSrc} alt="offerIcon" />
                <S.OfferBtnLetter>제안 받음</S.OfferBtnLetter>
              </S.OfferBtnContainer>
              <S.EmailBadgeContainer>
                <S.EmailBadgeIcon src={emailIconSrc} alt="emailIcon" />
              </S.EmailBadgeContainer>
              <S.PhoneBadgeContainer>
                <S.PhoneBadgeIcon src={phoneIconSrc} alt="phoneIcon" />
              </S.PhoneBadgeContainer>
            </S.BadgesContainer>
          </S.NameAndBadgesContainer>
          <S.Organization>홍익대학교 컴퓨터공학과</S.Organization>
          <S.Introduction>백엔드 개발과 데이터 분석에 관심이 있어요</S.Introduction>
          <S.LinkBtnsContainer>
            <S.LinkBtn>
              <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
              <S.LinkBtnLetter href="https://linkname.link">linkname.link</S.LinkBtnLetter>
            </S.LinkBtn>
            <S.LinkBtn>
              <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
              <S.LinkBtnLetter href="https://linkname.link">linkname.link</S.LinkBtnLetter>
            </S.LinkBtn>
          </S.LinkBtnsContainer>
        </S.ProfileInfo>
      </S.ProfileHeader>
    </S.ProfileLayout>
  );
};

export default Profile;
