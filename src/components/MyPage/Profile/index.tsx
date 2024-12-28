import { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import * as S from '@/components/MyPage/Profile/styles';
import defaultProfileImgSrc from '@/assets/webps/MyPage/defaultProfileImg.webp';
import offerIconSrc from '@/assets/webps/MyPage/offerIcon.webp';
import emailIconSrc from '@/assets/webps/MyPage/emailIcon.webp';
import phoneIconSrc from '@/assets/webps/MyPage/phoneIcon.webp';
import linkIconSrc from '@/assets/webps/MyPage/linkIcon.webp';
import editProfileMobileSrc from '@/assets/webps/MyPage/editProfileMobile.webp';

const Profile = () => {
  const { isPhone } = useResponsive();
  const [visibleContact, setVisibleContact] = useState<string | null>(null);

  const handlePhoneClick = () => {
    setVisibleContact((prev) => (prev === 'phone' ? null : 'phone'));
  };

  const handleEmailClick = () => {
    setVisibleContact((prev) => (prev === 'email' ? null : 'email'));
  };

  if (isPhone) {
    // 768px 미만 화면 렌더링
    return (
      <S.ProfileLayout>
        <S.ProfileContainer>
          <S.ProfileInfoContainer>
            <S.NameContainerMobile>
              <S.Name>홍길동</S.Name>
            </S.NameContainerMobile>
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
              <S.SeparationRectangle />
              <S.EditProfileContainerMobile>
                <S.EditProfileIconMobile src={editProfileMobileSrc} alt="editProfile" />
              </S.EditProfileContainerMobile>
            </S.BadgesContainer>
            <S.Organization>홍익대학교 컴퓨터공학과</S.Organization>
            <S.Introduction>백엔드 개발과 데이터 분석에 관심있어요</S.Introduction>
            <S.LinkBtnsContainer>
              <S.LinkBtnContainer>
                <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
                <S.LinkBtnLetter href="https://linkname.link">linkname.link</S.LinkBtnLetter>
              </S.LinkBtnContainer>
              <S.LinkBtnContainer>
                <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
                <S.LinkBtnLetter href="https://linkname.link">linkname.link</S.LinkBtnLetter>
              </S.LinkBtnContainer>
            </S.LinkBtnsContainer>
          </S.ProfileInfoContainer>
        </S.ProfileContainer>
        <S.ProfilePic src={defaultProfileImgSrc} alt="defaultProfile" />
        {visibleContact === 'email' && (
          <S.EmailContactContainer>
            <S.ContactLetterContainer>
              <S.ContactLetter>honggd@hongik.ac.kr</S.ContactLetter>
            </S.ContactLetterContainer>
            <S.ContactTriangle />
          </S.EmailContactContainer>
        )}
        {visibleContact === 'phone' && (
          <S.PhoneContactContainer>
            <S.ContactLetterContainer>
              <S.ContactLetter>010-2345-6789</S.ContactLetter>
            </S.ContactLetterContainer>
            <S.ContactTriangle />
          </S.PhoneContactContainer>
        )}
      </S.ProfileLayout>
    );
  }

  // 768px 이상 화면 렌더링
  return (
    <S.ProfileLayout>
      <S.ProfileContainer>
        <S.ProfilePic src={defaultProfileImgSrc} alt="defaultProfile" />
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
            <S.LinkBtnContainer>
              <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
              <S.LinkBtnLetter href="https://linkname.link">linkname.link</S.LinkBtnLetter>
            </S.LinkBtnContainer>
            <S.LinkBtnContainer>
              <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
              <S.LinkBtnLetter href="https://linkname.link">linkname.link</S.LinkBtnLetter>
            </S.LinkBtnContainer>
          </S.LinkBtnsContainer>
        </S.ProfileInfoContainer>
      </S.ProfileContainer>
      {visibleContact === 'email' && (
        <S.EmailContactContainer>
          <S.ContactLetterContainer>
            <S.ContactLetter>honggd@hongik.ac.kr</S.ContactLetter>
          </S.ContactLetterContainer>
          <S.ContactTriangle />
        </S.EmailContactContainer>
      )}
      {visibleContact === 'phone' && (
        <S.PhoneContactContainer>
          <S.ContactLetterContainer>
            <S.ContactLetter>010-2345-6789</S.ContactLetter>
          </S.ContactLetterContainer>
          <S.ContactTriangle />
        </S.PhoneContactContainer>
      )}
      <S.EditProfileBtn>
        <S.EditProfileBtnLetter>프로필 수정</S.EditProfileBtnLetter>
      </S.EditProfileBtn>
    </S.ProfileLayout>
  );
};

export default Profile;
