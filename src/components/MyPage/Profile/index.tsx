import { useState } from 'react';
import * as S from '@/components/MyPage/Profile/styles';
import defaultProfileSrc from '@/assets/webps/MyPage/defaultProfile.webp';
import offerIconSrc from '@/assets/webps/MyPage/offerIcon.webp';
import emailIconSrc from '@/assets/webps/MyPage/emailIcon.webp';
import phoneIconSrc from '@/assets/webps/MyPage/phoneIcon.webp';
import linkIconSrc from '@/assets/webps/MyPage/linkIcon.webp';

const Profile = () => {
  const [visibleContact, setVisibleContact] = useState<string | null>(null);

  const handlePhoneClick = () => {
    setVisibleContact((prev) => (prev === 'phone' ? null : 'phone'));
  };

  const handleEmailClick = () => {
    setVisibleContact((prev) => (prev === 'email' ? null : 'email'));
  };

  return (
    <S.ProfileLayout>
      <S.ProfileContainer>
        <S.ProfilePic src={defaultProfileSrc} alt="defaultProfile" />
        <S.ProfileInfoContainer>
          <S.NameAndBadgesContainer>
            <S.Name>홍길동</S.Name>
            <S.BadgesContainer>
              <S.OfferBtnContainer>
                <S.OfferBtnIcon src={offerIconSrc} alt="offerIcon" />
                <S.OfferBtnLetter>제안 받음</S.OfferBtnLetter>
              </S.OfferBtnContainer>
              <S.EmailBadgeContainer onClick={handleEmailClick}>
                <S.EmailBadgeIcon src={emailIconSrc} alt="emailIcon" />
              </S.EmailBadgeContainer>
              <S.PhoneBadgeContainer onClick={handlePhoneClick}>
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
        </S.ProfileInfoContainer>
      </S.ProfileContainer>
      {visibleContact === 'email' && (
        <S.EmailContact>
          <S.ContactLetterContainer>
            <S.ContactLetter>honggd@hongik.ac.kr</S.ContactLetter>
          </S.ContactLetterContainer>
          <S.ContactTriangle />
        </S.EmailContact>
      )}
      {visibleContact === 'phone' && (
        <S.PhoneContact>
          <S.ContactLetterContainer>
            <S.ContactLetter>010-2345-6789</S.ContactLetter>
          </S.ContactLetterContainer>
          <S.ContactTriangle />
        </S.PhoneContact>
      )}
      <S.EditProfileBtn>
        <S.EditProfileBtnLetter>프로필 수정</S.EditProfileBtnLetter>
      </S.EditProfileBtn>
    </S.ProfileLayout>
  );
};

export default Profile;
