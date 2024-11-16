import * as S from '@/pages/Project/WriteProjectPage/styles';
import HeaderSection from '@/components/WriteProject/HeaderSection';
import TitleSection from '@/components/WriteProject/TitleSection';
import CategorySection from '@/components/WriteProject/CategorySection';
import DescriptionSection from '@/components/WriteProject/DescriptionSection';
import SkillSection from '@/components/WriteProject/SkillSection';
import LinkSection from '@/components/WriteProject/LinkSection';
import ImageSection from '@/components/WriteProject/ImageSection';
import Navbar from '@/components/Layout/Navbar/Navbar';
import Modal from '@/components/Common/Modal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const WriteProjectPage = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [links, setLinks] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    category: false,
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<null | (() => void)>(null); // 실행할 함수 임시 저장
  const navigate = useNavigate();

  // 필수 입력 항목 유효성 검사 -> 에러 설정
  const validateFields = () => {
    setErrors({
      title: !title.trim() || title.length > 50,
      description: !description.trim(),
      category: !mainCategory || !subCategory,
    });
  };

  // 조건을 만족하면 업로드 버튼 활성화
  const btnActive =
    title.trim().length > 0 &&
    title.length <= 50 &&
    description.trim().length > 0 &&
    !!mainCategory &&
    !!subCategory;

  // 업로드 버튼을 누르면 유효성 검사 실시 -> 에러 설정, 버튼이 활성화 되어있는 경우 업로드 처리 로직
  const handleUploadClick = () => {
    validateFields();

    if (btnActive) {
      // 사진 처리
      const data = {
        isPrivate,
        title,
        mainCategory,
        subCategory,
        description,
        skill,
        links,
        // 사진 url
      };
      console.log('업로드 처리', data);
      // 페이지 이동
    }
  };

  // 입력 값이 있는지 확인
  const hasUnsavedData = () => {
    return (
      title.trim() ||
      description.trim() ||
      skill.trim() ||
      links.length > 0 ||
      (formData && Array.from(formData.entries()).length > 0) ||
      mainCategory ||
      subCategory
    );
  };

  // 모달 열기
  const openModal = (action: () => void) => {
    setPendingAction(() => action);
    setIsModalOpen(true);
  };

  // 네비게이션 함수
  const handleNavigation = (path: string | number) => {
    // 입력 값이 있는 상태에서 페이지 떠날 때 경고 모달 열기
    if (hasUnsavedData()) {
      // '나가기' 눌렀을 때 동작할 함수 전달
      openModal(() => {
        if (typeof path === 'number') {
          navigate(path);
        } else {
          navigate(path);
        }
      });
    } else {
      if (typeof path === 'number') {
        navigate(path);
      } else {
        navigate(path);
      }
    }
  };

  // 모달에서 나가기 버튼 클릭
  const handleModalExit = () => {
    if (pendingAction) {
      pendingAction(); // 임시 저장 함수 실행
    }
    setIsModalOpen(false);
  };

  // 모달에서 비공개 업로드 버튼 클릭
  const handleModalPrivateUpload = () => {
    setIsModalOpen(false);
    setIsPrivate(true);
    validateFields();
    if (btnActive) {
      // 사진 처리
      const data = {
        isPrivate: true,
        title,
        mainCategory,
        subCategory,
        description,
        skill,
        links,
        // 사진 url
      };
      console.log('업로드 처리', data);
      // 페이지 이동
    }
  };

  // 브라우저에서 뒤로가기, 새로고침, 창 닫기 했을 때 경고
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedData()) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedData]);

  return (
    <>
      <Navbar
        onGoBackClick={() => handleNavigation(-1)}
        onAboutClick={() => handleNavigation('/')}
        onHomeClick={() => handleNavigation('/home')}
        onMyPageClick={() => handleNavigation('/mypage')}
      />
      <S.Layout>
        <S.PortFolioLayout>
          <HeaderSection
            isPrivate={isPrivate}
            setIsPrivate={setIsPrivate}
            handleUploadClick={handleUploadClick}
            btnActive={btnActive}
          />
          <S.FormContainer>
            <TitleSection
              title={title}
              setTitle={setTitle}
              error={errors.title}
              setErrors={setErrors}
            />
            <CategorySection
              mainCategory={mainCategory}
              setMainCategory={setMainCategory}
              subCategory={subCategory}
              setSubcategory={setSubCategory}
              error={errors.category}
              setErrors={setErrors}
            />
            <DescriptionSection
              description={description}
              setDescription={setDescription}
              error={errors.description}
              setErrors={setErrors}
            />
            <SkillSection skill={skill} setSkill={setSkill} />
            <LinkSection links={links} setLink={setLinks} />
            <ImageSection setFormData={setFormData} />
          </S.FormContainer>
        </S.PortFolioLayout>
      </S.Layout>
      <Modal
        isOpen={isModalOpen}
        icon="warning"
        mainText="작성 중인 글이 있어요"
        subText={`지금 나가면 작성 중인 내용이 모두 사라져요.\n비공개로 업로드하고 언제든지 수정하세요.`}
        LBtnText="나가기"
        LBtnOnClick={handleModalExit}
        RBtnText="비공개 업로드"
        RBtnOnclick={handleModalPrivateUpload}
      />
    </>
  );
};
