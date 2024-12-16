import EditProfileModal from '@/components/Mypage/EditProfileModal';
import { useState } from 'react';

export const Mypage = () => {
  const profileData = {
    id: 1,
    nickname: '홍길동',
    education: '홍익대학교 컴퓨터공학과',
    education_is_public: true,
    main_field: '프론트엔드',
    phone_num: '010-1234-5678',
    phone_num_is_public: false,
    email: null,
    email_is_public: false,
    introduction: '안녕하세요! 프론트엔드 개발자 홍길동입니다.',
    links: ['https://github.com/username', 'https://linkedin.com/in/username'],
    availability: ['프로젝트 합류', '외주'],
    profile_img: 'https://placehold.co/600x400?text=profile',
  };

  // 모달 열림 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>모달</button>
      <EditProfileModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} profileData={profileData} />
    </>
  );
};
