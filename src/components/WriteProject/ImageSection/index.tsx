import * as S from '@/components/WriteProject/ImageSection/styles';
import imageUploadBtn from '@/assets/svgs/WriteProject/imageUploadBtn.svg';
import imageChange from '@/assets/webps/Common/imageChange.webp';
import imageDelete from '@/assets/webps/Common/imageDelete.webp';
import { useState, useRef, useEffect } from 'react';

interface ImageSectionProps {
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
}

const ImageSection = ({ setFormData }: ImageSectionProps) => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previousImageCount = useRef(0);

  // 이미지 파일 업로드 & 교체
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (replaceIndex !== null && files.length > 0) {
      // 특정 인덱스의 이미지를 교체
      const updatedFiles = [...imageFiles];
      const newFile = files[0];
      updatedFiles[replaceIndex] = newFile;

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const updatedPreviews = [...imagePreviews];
          updatedPreviews[replaceIndex] = reader.result as string;
          setImagePreviews(updatedPreviews);
        }
      };
      reader.readAsDataURL(newFile);

      setImageFiles(updatedFiles);
      setFormData(createFormData(updatedFiles)); // formdata 형식으로 만들어서 상위 컴포넌트로 전달
      setReplaceIndex(null); // 교체 후 초기화
    } else {
      // 새로 추가된 파일 처리
      const newFiles = [...imageFiles, ...files].slice(0, 10);
      newFiles.slice(imageFiles.length).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setImagePreviews((prev) => [...prev, reader.result as string].slice(0, 10));
          }
        };
        reader.readAsDataURL(file);
      });

      setImageFiles(newFiles);
      setFormData(createFormData(newFiles)); // formdata 형식으로 만들어서 상위 컴포넌트로 전달
    }

    e.target.value = ''; // 사진 input 초기화
  };

  // formData 생성 함수
  const createFormData = (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append('file[]', file));
    return formData;
  };

  // 이미지 삭제
  const handleRemoveImage = (index: number) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageFiles(updatedFiles);
    setFormData(createFormData(updatedFiles)); // formdata 형식으로 만들어서 상위 컴포넌트로 전달
  };

  // Change 버튼 클릭 시 인덱스 설정 후 input 클릭하여 파일 선택 창 열기
  const handleReplaceImageClick = (index: number) => {
    setReplaceIndex(index);
    inputRef.current?.click();
  };

  // 스크롤을 오른쪽으로 이동 (새 이미지가 추가된 경우에만)
  useEffect(() => {
    if (containerRef.current && imagePreviews.length > previousImageCount.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth - containerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
    previousImageCount.current = imagePreviews.length;
  }, [imagePreviews]);

  return (
    <S.SectionContainer>
      <S.SectionTitle>사진</S.SectionTitle>
      <S.StyledScrollContainer innerRef={containerRef} vertical={false}>
        {imagePreviews.map((preview, index) => (
          <S.ImageContainer key={index}>
            <S.HoverImageContainer>
              <S.HoverBtn
                $backgroundImage={imageChange}
                onClick={() => handleReplaceImageClick(index)}
              />
              <S.HoverBtn $backgroundImage={imageDelete} onClick={() => handleRemoveImage(index)} />
            </S.HoverImageContainer>
            <S.StyledImg src={preview} alt={`사진${index}`} />
          </S.ImageContainer>
        ))}
        {imageFiles.length < 10 && (
          <>
            <S.UploadBtn $backgroundImage={imageUploadBtn} htmlFor="file-upload" />
            <S.UploadInput
              id="file-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              ref={inputRef}
            />
          </>
        )}
      </S.StyledScrollContainer>
    </S.SectionContainer>
  );
};

export default ImageSection;
