import { useState, useEffect } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from '@/components/MyPage/Profile/styles';
import defaultProfileImgSrc from '@/assets/webps/MyPage/defaultProfileImg.webp';
import offerIconSrc from '@/assets/webps/MyPage/offerIcon.webp';
import offerIconGraySrc from '@/assets/webps/MyPage/offerIconGray.webp';
import emailIconSrc from '@/assets/webps/MyPage/emailIcon.webp';
import phoneIconSrc from '@/assets/webps/MyPage/phoneIcon.webp';
import linkIconSrc from '@/assets/webps/MyPage/linkIcon.webp';
import editProfileMobileSrc from '@/assets/webps/MyPage/editProfileMobile.webp';
import EditProfileModal from '@/components/MyPage/EditProfileModal';
import { instance } from '@/apis/instance';

interface Profile {
  id: number;
  nickname: string;
  education: string;
  education_is_public: boolean;
  main_field: string;
  phone_num: string | null;
  phone_num_is_public: boolean;
  email: string | null;
  email_is_public: boolean;
  introduction: string | null;
  links: string[];
  availability: string[];
  profile_img_url: string | null;
}

const Profile = () => {
  const { isPhone } = useResponsive();
  const [visibleContact, setVisibleContact] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<Profile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user_id } = useParams<{ user_id: string }>();
  const loginUserId = localStorage.getItem('user_id');
  const isMyProfile = user_id === loginUserId;
  const isAvailable = !profileData?.availability.includes('제안 받지 않음');

  // 프로필 정보 불러오기
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await instance.get(`pofolo/users/profile/${user_id}/`);
        setProfileData(response.data.profile);
      } catch (error: any) {
        // 존재하지 않는 사용자일 경우 NotFound로 이동
        if (error.response && error.response.status === 404) {
          navigate('/not-found');
        } else {
          console.error(error);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleOpenModal = () => {
    if (profileData) {
      setIsModalOpen(true);
    }
  };

  const handlePhoneClick = () => {
    setVisibleContact((prev) => (prev === 'phone' ? null : 'phone'));
  };

  const handleEmailClick = () => {
    setVisibleContact((prev) => (prev === 'email' ? null : 'email'));
  };

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return domain;
    } catch (error) {
      return '잘못된 URL';
    }
  };

  if (isPhone) {
    // 768px 미만 화면 렌더링
    return (
      <S.ProfileLayout>
        <S.ProfileAndLink>
          <S.ProfileContainer>
            <S.ProfileInfoContainer>
              <S.NameContainerMobile>
                <S.Name>{profileData?.nickname}</S.Name>
              </S.NameContainerMobile>
              <S.BadgesContainer>
                <S.OfferBtnContainer $isAvailable={isAvailable}>
                  <S.OfferBtnIcon
                    src={isAvailable ? offerIconSrc : offerIconGraySrc}
                    alt="offerIcon"
                  />
                  <S.OfferBtnLetter $isAvailable={isAvailable}>
                    {isAvailable ? '제안 받음' : '받지 않음'}
                  </S.OfferBtnLetter>
                </S.OfferBtnContainer>
                {profileData?.email_is_public && (
                  <S.EmailBadgeContainer onClick={handleEmailClick}>
                    {visibleContact === 'email' && (
                      <S.EmailContactContainer>
                        <S.ContactLetterContainer>
                          <S.ContactLetter>{profileData?.email}</S.ContactLetter>
                        </S.ContactLetterContainer>
                        <S.ContactTriangle />
                      </S.EmailContactContainer>
                    )}
                    <S.EmailBadgeIcon src={emailIconSrc} alt="emailIcon" />
                  </S.EmailBadgeContainer>
                )}
                {profileData?.phone_num_is_public && (
                  <S.PhoneBadgeContainer onClick={handlePhoneClick}>
                    {visibleContact === 'phone' && (
                      <S.PhoneContactContainer>
                        <S.ContactLetterContainer>
                          <S.ContactLetter>{profileData?.phone_num}</S.ContactLetter>
                        </S.ContactLetterContainer>
                        <S.ContactTriangle />
                      </S.PhoneContactContainer>
                    )}
                    <S.PhoneBadgeIcon src={phoneIconSrc} alt="phoneIcon" />
                  </S.PhoneBadgeContainer>
                )}
                {isMyProfile && (
                  <>
                    <S.SeparationRectangle />
                    <S.EditProfileContainerMobile onClick={handleOpenModal}>
                      <S.EditProfileIconMobile src={editProfileMobileSrc} alt="editProfile" />
                    </S.EditProfileContainerMobile>
                  </>
                )}
              </S.BadgesContainer>
              {profileData?.education_is_public && (
                <S.Organization>{profileData.education}</S.Organization>
              )}
              {profileData?.introduction && (
                <S.Introduction>{profileData.introduction}</S.Introduction>
              )}
            </S.ProfileInfoContainer>
            <S.ProfilePic
              src={profileData?.profile_img_url || defaultProfileImgSrc}
              alt="profileImg"
            />
          </S.ProfileContainer>
          {profileData?.links && (
            <S.LinkBtnsContainer>
              {profileData.links.map((link, index) => (
                <S.LinkBtnContainer key={index}>
                  <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
                  <S.LinkBtnLetter href={link} target="_blank" rel="noopener noreferrer">
                    {getDomainFromUrl(link)}
                  </S.LinkBtnLetter>
                </S.LinkBtnContainer>
              ))}
            </S.LinkBtnsContainer>
          )}
        </S.ProfileAndLink>
        {profileData && (
          <EditProfileModal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            profileData={profileData}
          />
        )}
      </S.ProfileLayout>
    );
  }

  // 768px 이상 화면 렌더링
  return (
    <S.ProfileLayout>
      <S.ProfileContainer>
        <S.ProfilePic src={profileData?.profile_img_url || defaultProfileImgSrc} alt="profileImg" />
        <S.ProfileInfoContainer>
          <S.NameAndBadgesContainer>
            <S.Name>{profileData?.nickname}</S.Name>
            <S.BadgesContainer>
              <S.OfferBtnContainer $isAvailable={isAvailable}>
                <S.OfferBtnIcon
                  src={isAvailable ? offerIconSrc : offerIconGraySrc}
                  alt="offerIcon"
                />
                <S.OfferBtnLetter $isAvailable={isAvailable}>
                  {isAvailable ? '제안 받음' : '받지 않음'}
                </S.OfferBtnLetter>
              </S.OfferBtnContainer>
              {profileData?.email_is_public && (
                <S.EmailBadgeContainer onClick={handleEmailClick}>
                  {visibleContact === 'email' && (
                    <S.EmailContactContainer>
                      <S.ContactLetterContainer>
                        <S.ContactLetter>{profileData?.email}</S.ContactLetter>
                      </S.ContactLetterContainer>
                      <S.ContactTriangle />
                    </S.EmailContactContainer>
                  )}
                  <S.EmailBadgeIcon src={emailIconSrc} alt="emailIcon" />
                </S.EmailBadgeContainer>
              )}
              {profileData?.phone_num_is_public && (
                <S.PhoneBadgeContainer onClick={handlePhoneClick}>
                  {visibleContact === 'phone' && (
                    <S.PhoneContactContainer>
                      <S.ContactLetterContainer>
                        <S.ContactLetter>{profileData?.phone_num}</S.ContactLetter>
                      </S.ContactLetterContainer>
                      <S.ContactTriangle />
                    </S.PhoneContactContainer>
                  )}
                  <S.PhoneBadgeIcon src={phoneIconSrc} alt="phoneIcon" />
                </S.PhoneBadgeContainer>
              )}
            </S.BadgesContainer>
            {isMyProfile && (
              <S.EditProfileBtn>
                <S.EditProfileBtnLetter onClick={handleOpenModal}>
                  프로필 수정
                </S.EditProfileBtnLetter>
              </S.EditProfileBtn>
            )}
          </S.NameAndBadgesContainer>
          {profileData?.education_is_public && (
            <S.Organization>{profileData.education}</S.Organization>
          )}
          {profileData?.introduction && <S.Introduction>{profileData.introduction}</S.Introduction>}
          {profileData?.links && (
            <S.LinkBtnsContainer>
              {profileData.links.map((link, index) => (
                <S.LinkBtnContainer key={index}>
                  <S.LinkBtnIcon src={linkIconSrc} alt="linkIcon" />
                  <S.LinkBtnLetter href={link} target="_blank" rel="noopener noreferrer">
                    {getDomainFromUrl(link)}
                  </S.LinkBtnLetter>
                </S.LinkBtnContainer>
              ))}
            </S.LinkBtnsContainer>
          )}
        </S.ProfileInfoContainer>
      </S.ProfileContainer>
      {profileData && (
        <EditProfileModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          profileData={profileData}
        />
      )}
    </S.ProfileLayout>
  );
};

export default Profile;
