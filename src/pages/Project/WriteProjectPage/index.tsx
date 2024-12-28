import * as S from '@/pages/Project/WriteProjectPage/styles';
import HeaderSection from '@/components/FormField/HeaderSection';
import TitleSection from '@/components/FormField/TitleSection';
import CategorySection from '@/components/FormField/CategorySection';
import DescriptionSection from '@/components/FormField/DescriptionSection';
import SkillSection from '@/components/WriteProject/SkillSection';
import LinkSection from '@/components/WriteProject/LinkSection';
import ImageSection from '@/components/WriteProject/ImageSection';
import Navbar from '@/components/Layout/Navbar/NavbarPC';
import Modal from '@/components/Common/Modal';
import { instance } from '@/apis/instance';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '@/hooks/useResponsive';

interface SiteLink {
  [key: string]: string;
}

export const WriteProjectPage = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [links, setLinks] = useState<SiteLink>({});
  const [images, setImages] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({
    title: false,
    description: false,
    category: false,
  });
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<null | (() => void)>(null); // 실행할 함수 임시 저장
  const navigate = useNavigate();
  const { isPC } = useResponsive();

  // 프로젝트 업로드
  const uploadData = async (isPrivateOverride?: boolean) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('major_field', mainCategory);
    formData.append('sub_field', subCategory);
    formData.append('skills', skill);
    formData.append('links', JSON.stringify(links));
    const isPublic = isPrivateOverride ? 'false' : isPrivate ? 'false' : 'true';
    formData.append('is_public', isPublic);
    for (let i = 0; i < images.length; i++) {
      formData.append('project_img', images[i]);
    }

    try {
      const response = await instance.post('/pofolo/projects/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPendingAction(() => () => {
        navigate(`/project/${response.data.id}`); // navigate 함수를 저장했다가 '프로젝트 보기' 클릭 시 넘어감
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 조건을 만족하면 업로드 버튼 활성화
  const btnActive =
    title.trim().length > 0 &&
    title.length <= 50 &&
    description.trim().length > 0 &&
    !!mainCategory &&
    !!subCategory;

  // 필수 입력 항목 유효성 검사 -> 에러 설정
  const validateFields = () => {
    setErrors({
      title: !title.trim() || title.length > 50,
      description: !description.trim(),
      category: !mainCategory || !subCategory,
    });
  };

  // 업로드 버튼을 누르면 유효성 검사 실시 -> 에러 설정, 버튼이 활성화 되어있는 경우 업로드 처리 로직
  const handleUploadClick = async () => {
    validateFields();

    if (btnActive) {
      await uploadData();
      setIsCompleteModalOpen(true);
    }
  };

  // 입력 값이 있는지 확인
  const hasUnsavedData = () => {
    return (
      title.trim() ||
      description.trim() ||
      skill.trim() ||
      Object.keys(links).length > 0 ||
      (images && Array.from(images.entries()).length > 0) ||
      mainCategory ||
      subCategory
    );
  };

  // 입력 값이 있을 때 브라우저에서 뒤로가기, 새로고침, 창 닫기 했을 때 경고
  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (hasUnsavedData()) {
      event.preventDefault();
      event.returnValue = '';
    }
  };
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedData]);

  // 모달 열기
  const openAlertModal = (action: () => void) => {
    setPendingAction(() => action);
    setIsAlertModalOpen(true);
  };

  // 네비게이션 함수
  const handleNavigation = (path: string | number) => {
    // 입력 값이 있는 상태에서 페이지 떠날 때 경고 모달 열기
    if (hasUnsavedData()) {
      // '나가기' 눌렀을 때 동작할 함수 전달
      openAlertModal(() => {
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

  // 경고 모달에서 나가기 버튼 클릭
  const handleAlertModalExit = () => {
    window.removeEventListener('beforeunload', handleBeforeUnload); // 모달에서 나가기 클릭할때는 beforeunload 이벤트 제거
    if (pendingAction) {
      pendingAction(); // 임시 저장 함수 실행
    }
  };

  // 경고 모달에서 비공개 업로드 버튼 클릭
  const handleAlertModalPrivateUpload = async () => {
    setIsAlertModalOpen(false);
    setIsPrivate(true);
    validateFields();

    if (btnActive) {
      await uploadData(true);
      handleAlertModalExit();
    }
  };

  // 프로젝트 완성 모달에서 닫기 버튼 클릭
  const handleCompleteModalClose = () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    navigate(-1);
  };

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
            headerText="새 프로젝트"
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
              direction={isPC ? 'row' : 'column'}
            />
            <DescriptionSection
              description={description}
              setDescription={setDescription}
              error={errors.description}
              setErrors={setErrors}
            />
            <SkillSection skill={skill} setSkill={setSkill} />
            <LinkSection links={links} setLinks={setLinks} />
            <ImageSection images={images} setImages={setImages} />
          </S.FormContainer>
        </S.PortFolioLayout>
      </S.Layout>
      <Modal
        isOpen={isAlertModalOpen}
        setIsOpen={setIsAlertModalOpen}
        icon="warning"
        mainText="작성 중인 글이 있어요"
        subText={`지금 나가면 작성 중인 내용이 모두 사라져요.\n비공개로 업로드하고 언제든지 수정하세요.`}
        LBtnText="나가기"
        LBtnOnClick={handleAlertModalExit}
        RBtnText="비공개 업로드"
        RBtnOnclick={handleAlertModalPrivateUpload}
      />
      <Modal
        isOpen={isCompleteModalOpen}
        setIsOpen={setIsCompleteModalOpen}
        icon="checked"
        mainText="프로젝트가 완성되었어요!"
        LBtnText="닫기"
        LBtnOnClick={handleCompleteModalClose}
        RBtnText="프로젝트 보기"
        RBtnOnclick={() => {
          if (pendingAction) {
            pendingAction();
          }
        }}
      />
    </>
  );
};
