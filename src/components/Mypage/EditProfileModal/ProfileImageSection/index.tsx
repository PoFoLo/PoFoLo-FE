import * as S from '@/components/Mypage/EditProfileModal/ProfileImageSection/styles';
import imageChange from '@/assets/webps/Common/imageChange.webp';
import imageDelete from '@/assets/webps/Common/imageDelete.webp';
import defaultProfile from '@/assets/svgs/Mypage/defaultProfile.svg';
import { useState, useRef } from 'react';

interface ImageSectionProps {
  profileImg: string | null;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  setIsImageDeleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileImageSection = ({
  profileImg,
  setImageFile,
  setIsImageDeleted: setIsImageDelete,
}: ImageSectionProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(profileImg);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
    setIsImageDelete(false);
  };

  const triggerFileInput = () => {
    inputRef.current?.click();
  };

  const handleDeleteImage = () => {
    setImageFile(null); // 부모 파일 상태 초기화
    setImagePreview(null); // 미리보기 이미지 초기화
    if (inputRef.current) {
      inputRef.current.value = ''; // 파일 업로드 input 값 초기화
    }
    setIsImageDelete(true);
  };

  return (
    <S.ImageContainer>
      <S.HoverImageContainer>
        <S.HoverBtn $backgroundImage={imageChange} onClick={triggerFileInput} />
        <S.HoverBtn $backgroundImage={imageDelete} onClick={handleDeleteImage} />
      </S.HoverImageContainer>
      <S.ImagePreview src={imagePreview || defaultProfile} />
      <S.UploadInput type="file" accept="image/*" onChange={handleImageUpload} ref={inputRef} />
    </S.ImageContainer>
  );
};

export default ProfileImageSection;
