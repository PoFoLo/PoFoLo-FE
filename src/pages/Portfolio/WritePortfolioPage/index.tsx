import * as S from '@/pages/Portfolio/WritePortfolioPage/styles';
import HeaderSection from '@/components/FormField/HeaderSection';
import TitleSection from '@/components/FormField/TitleSection';
import NameSection from '@/components/WritePortfolio/NameSection';
import CategorySection from '@/components/FormField/CategorySection';
import DescriptionSection from '@/components/FormField/DescriptionSection';
import SkillSection from '@/components/WritePortfolio/SkillSection';
import CareerSection from '@/components/WritePortfolio/CareerSection';
import ProjectSection from '@/components/WritePortfolio/ProjectSection';
import Navbar from '@/components/Layout/Navbar/NavbarPC';
import Modal from '@/components/Common/Modal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '@/hooks/useResponsive';

export const WritePortfolioPage = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [career, setCareer] = useState<string>('');
  const [projects, setProjects] = useState<number[]>([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({
    title: false,
    name: false,
    description: false,
    category: false,
    skill: false,
    career: false,
    projects: false,
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<null | (() => void)>(null); // 실행할 함수 임시 저장
  const navigate = useNavigate();
  const { isPC } = useResponsive();

  // 필수 입력 항목 유효성 검사 -> 에러 설정
  const validateFields = () => {
    setErrors({
      title: !title.trim() || title.length > 50,
      name: !name.trim(),
      description: !description.trim(),
      category: !mainCategory || !subCategory,
      skill: !skill.trim(),
      career: !career.trim(),
      projects: projects.length == 0,
    });
  };

  // 조건을 만족하면 업로드 버튼 활성화
  const btnActive =
    title.trim().length > 0 &&
    title.length <= 50 &&
    name.trim().length > 0 &&
    description.trim().length > 0 &&
    !!mainCategory &&
    !!subCategory &&
    skill.trim().length > 0 &&
    career.trim().length > 0 &&
    projects.length > 0;

  // 업로드 버튼을 누르면 유효성 검사 실시 -> 에러 설정, 버튼이 활성화 되어있는 경우 업로드 처리 로직
  const handleUploadClick = () => {
    validateFields();

    if (btnActive) {
      // 사진 처리
      const data = {
        isPrivate,
        title,
        name,
        mainCategory,
        subCategory,
        description,
        career,
        projects,
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
      name.trim() ||
      description.trim() ||
      mainCategory ||
      subCategory ||
      skill.trim() ||
      career.trim() ||
      projects.length > 0
    );
  };

  // 브라우저에서 뒤로가기, 새로고침, 창 닫기 했을 때 경고
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
    window.removeEventListener('beforeunload', handleBeforeUnload); // 모달에서 나가기 클릭할때는 beforeunload 이벤트 제거
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
        name,
        mainCategory,
        subCategory,
        description,
        skill,
        career,
        // 사진 url
      };
      console.log('업로드 처리', data);
      // 페이지 이동
    }
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
            headerText="새 포트폴리오"
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
            <NameSection name={name} setName={setName} error={errors.name} setErrors={setErrors} />
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
            <SkillSection
              skill={skill}
              setSkill={setSkill}
              error={errors.skill}
              setErrors={setErrors}
            />
            <CareerSection
              career={career}
              setCareer={setCareer}
              error={errors.career}
              setErrors={setErrors}
            />
            <ProjectSection
              projects={projects}
              setProjects={setProjects}
              error={errors.projects}
              setErrors={setErrors}
            />
          </S.FormContainer>
        </S.PortFolioLayout>
      </S.Layout>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
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
