import * as S from '@/components/WriteProject/ImageSection/styles';
import imageUploadBtn from '@/assets/webps/WriteProject/imgUploadBtn.webp';
import imageUploadPCBtn from '@/assets/webps/WriteProject/imgUploadPCBtn.webp';
import imageChange from '@/assets/webps/Common/imageChange.webp';
import imageDelete from '@/assets/webps/Common/imageDelete.webp';
import { useState, useRef, useEffect } from 'react';
import { useResponsive } from '@/hooks/useResponsive';

interface ImageItem {
  url: string | null; // 기존 이미지 URL
  file: File | null; // 새로 추가된 파일
}

interface ImageSectionProps {
  images: string[]; // 기존 이미지
  setImagesState: React.Dispatch<React.SetStateAction<ImageItem[]>>;
}

const ImageSection = ({ images, setImagesState }: ImageSectionProps) => {
  const [imagesState, setLocalImagesState] = useState<ImageItem[]>(
    images.map((url) => ({ url, file: null }))
  );
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previousImageCount = useRef(0);
  const { isPC } = useResponsive();

  // 기존 이미지가 있는 경우 로드
  useEffect(() => {
    const initialImagesState = images.map((url) => ({ url, file: null }));
    setLocalImagesState(initialImagesState);
    setImagePreviews(images);
  }, [images]);

  // 상위 컴포넌트에 상태 동기화
  useEffect(() => {
    setImagesState(imagesState);
  }, [imagesState, setImagesState]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (replaceIndex !== null && files.length > 0) {
      // 특정 인덱스의 이미지를 교체
      const newFile = files[0];
      setLocalImagesState((prev) =>
        prev.map((item, index) =>
          index === replaceIndex ? { url: item.url, file: newFile } : item
        )
      );

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImagePreviews((prev) => {
            const updatedPreviews = [...prev];
            updatedPreviews[replaceIndex] = reader.result as string;
            return updatedPreviews;
          });
        }
      };
      reader.readAsDataURL(newFile);

      setReplaceIndex(null); // 교체 후 초기화
    } else {
      // 새로 추가된 파일 처리
      const newImages = files.map((file) => ({ url: null, file }));
      setLocalImagesState((prev) => [...prev, ...newImages].slice(0, 10));

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setImagePreviews((prev) => [...prev, reader.result as string].slice(0, 10));
          }
        };
        reader.readAsDataURL(file);
      });
    }
    e.target.value = '';
  };

  // 이미지 삭제
  const handleRemoveImage = (index: number) => {
    setLocalImagesState((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
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
        {imagesState.length < 10 && (
          <>
            <S.UploadBtn
              $backgroundImage={isPC ? imageUploadPCBtn : imageUploadBtn}
              htmlFor="file-upload"
            />
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
