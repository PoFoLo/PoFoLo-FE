import EditProfileModal from '@/components/Mypage/EditProfileModal';
import { useState, useEffect } from 'react';
import { instance } from '@/apis/instance';

export const Mypage = () => {
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 프로필 데이터 로드
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await instance.get('pofolo/users/profile/1/');
        setProfileData(response.data.profile);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleOpenModal = () => {
    if (profileData) {
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal}>모달</button>
      {profileData && (
        <EditProfileModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          profileData={profileData}
        />
      )}
    </div>
  );
};

export default Mypage;
