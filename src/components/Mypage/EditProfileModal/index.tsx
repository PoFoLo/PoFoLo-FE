import * as S from '@/components/Mypage/EditProfileModal/styles';
import modalGoBack from '@/assets/webps/Common/modalGoBack.webp';
import modalClose from '@/assets/webps/Common/modalClose.webp';
import Button from '@/components/Common/Button';
import ProfileImageSection from '@/components/Mypage/EditProfileModal/ProfileImageSection';
import NicknameSection from '@/components/Mypage/EditProfileModal/NicknameSection';
import EducationSection from '@/components/Mypage/EditProfileModal/EducationSection';
import ContactSection from '@/components/Mypage/EditProfileModal/ContactSection';
import IntroductionSection from '@/components/Mypage/EditProfileModal/IntroductionSection';
import ProfileLinkSection from '@/components/Mypage/EditProfileModal/ProfileLinkSection';
import AvailabilitySection from '@/components/Mypage/EditProfileModal/AvailabilitySection';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useResponsive } from '@/hooks/useResponsive';

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
  profile_img: string | null;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  profileData: Profile;
}

const EditProfileModal = ({ isOpen = false, setIsOpen, profileData }: ModalProps) => {
  const [nickname, setNickname] = useState<string>(profileData.nickname);
  const [education, setEducation] = useState<string>(profileData.education);
  const [educationIsPublic, setEducationIsPublic] = useState<boolean>(
    profileData.education_is_public
  );
  const [phoneNum, setPhoneNum] = useState<string | null>(profileData.phone_num);
  const [phoneNumIsPublic, setPhoneNumIsPublic] = useState<boolean>(
    profileData.phone_num_is_public
  );
  const [email, setEmail] = useState<string | null>(profileData.email);
  const [emailIsPublic, setEmailIsPublic] = useState<boolean>(profileData.email_is_public);
  const [introduction, setIntroduction] = useState<string | null>(profileData.introduction);
  const [links, setLinks] = useState<string[]>(profileData.links);
  const [availability, setAvailability] = useState<string[]>(profileData.availability);
  const [imageFile, setImageFile] = useState<File | null>(null); // 프로필 이미지 변경 시 이미지 파일
  const [errors, setErrors] = useState<Record<string, boolean>>({
    nickname: false,
    education: false,
    introduction: false,
  });

  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 작동 여부
  const [upwardDirection, setUpwardDirection] = useState(false); // 애니메이션 이동 방향
  const modalRef = useRef<HTMLDivElement>(null);
  const { isPC } = useResponsive();

  // 모달 열릴 때 애니메이션 제어
  useEffect(() => {
    if (isOpen) {
      setIsOpen(true);
      if (!isPC) {
        setIsAnimating(true);
        setUpwardDirection(true);
      } else {
        setIsAnimating(false);
      }
    }
  }, [isOpen]);

  // 모달 닫힐 때 애니메이션 제어
  const handleClose = () => {
    if (!isPC) {
      setIsAnimating(true);
      setUpwardDirection(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 400); // 애니메이션 종료 후 모달 닫기
    } else {
      setIsOpen(false);
    }
  };

  // 모달 열렸을 때 외부 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 모달 외부 클릭 시 닫히게
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    },
    [isPC]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // 필수 입력 항목 유효성 검사 -> 에러 설정
  const validateFields = () => {
    setErrors({
      nickname: !nickname.trim(),
      education: !education.trim(),
      introduction: introduction !== null && introduction.length > 50,
    });
  };

  // 조건을 만족하면 저장 버튼 활성화
  const btnActive =
    nickname.trim().length > 0 &&
    education.trim().length > 0 &&
    (!introduction || introduction.length <= 50);

  // 저장 버튼을 누르면 유효성 검사 실시, 버튼이 활성화 되어있는 경우 저장 처리 로직
  const handleSaveClick = () => {
    validateFields();

    // trim 해서 보내기
    if (btnActive) {
      const data = {
        nickname,
        education,
        educationIsPublic,
        phoneNum,
        phoneNumIsPublic,
        email,
        emailIsPublic,
        introduction,
        links,
        availability,
      };
      console.log('저장', data);
      // 프로필 이미지 처리
    }
  };

  return (
    <>
      {isOpen && (
        <S.ModalOverlay>
          <S.ModalContainer
            ref={modalRef}
            $upwardDirection={upwardDirection}
            $isAnimating={isAnimating}
          >
            <S.ModalHeaderContainer>
              <S.ModalTitleContainer>
                <S.GoBackBtn
                  $backgroundImage={isPC ? modalGoBack : modalClose}
                  onClick={handleClose}
                />
                <S.ModalTitleText>프로필 수정</S.ModalTitleText>
              </S.ModalTitleContainer>
              <Button
                size={isPC ? 'medium' : 'small'}
                type={btnActive ? 'main' : 'inactive'}
                onClick={handleSaveClick}
              >
                저장
              </Button>
            </S.ModalHeaderContainer>
            <S.ProfileContainer>
              <ProfileImageSection
                profileImg={profileData.profile_img}
                setImageFile={setImageFile}
              />
              <S.ProfileFormContainer>
                <NicknameSection
                  nickname={nickname}
                  setNickname={setNickname}
                  error={errors.nickname}
                  setErrors={setErrors}
                />
                <EducationSection
                  education={education}
                  setEducation={setEducation}
                  educationIsPublic={educationIsPublic}
                  setEducationIsPublic={setEducationIsPublic}
                  setErrors={setErrors}
                  error={errors.education}
                />
                <ContactSection
                  phoneNum={phoneNum}
                  setPhoneNum={setPhoneNum}
                  phoneNumIsPublic={phoneNumIsPublic}
                  setPhoneNumIsPublic={setPhoneNumIsPublic}
                  email={email}
                  setEmail={setEmail}
                  emailIsPublic={emailIsPublic}
                  setEmailIsPublic={setEmailIsPublic}
                />
                <IntroductionSection
                  introduction={introduction}
                  setIntroduction={setIntroduction}
                  setErrors={setErrors}
                  error={errors.introduction}
                />
                <ProfileLinkSection links={links} setLinks={setLinks} />
                <AvailabilitySection
                  availability={availability}
                  setAvailability={setAvailability}
                />
              </S.ProfileFormContainer>
            </S.ProfileContainer>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default EditProfileModal;
