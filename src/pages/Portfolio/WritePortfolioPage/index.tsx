import * as S from '@/pages/Portfolio/WritePortfolioPage/styles';
import HeaderSection from '@/components/FormField/HeaderSection';
import TitleSection from '@/components/FormField/TitleSection';
import NameSection from '@/components/WritePortfolio/NameSection';
import CategorySection from '@/components/FormField/CategorySection';
import DescriptionSection from '@/components/FormField/DescriptionSection';
import SkillSection from '@/components/WritePortfolio/SkillSection';
import CareerSection from '@/components/WritePortfolio/CareerSection';
import ProjectSection from '@/components/WritePortfolio/ProjectSection';
import Navbar from '@/components/Layout/Navbar/Navbar';
import Modal from '@/components/Common/Modal';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResponsive } from '@/hooks/useResponsive';
import { instance } from '@/apis/instance';

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

  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<null | (() => void)>(null); // 실행할 함수 임시 저장
  const navigate = useNavigate();
  const { portfolio_id } = useParams();
  const isEditMode = !!portfolio_id;
  const { isPC } = useResponsive();

  // 포트폴리오 불러오기
  useEffect(() => {
    if (isEditMode) {
      const fetchPortfolio = async () => {
        try {
          const response = await instance.get(`pofolo/portfolios/${portfolio_id}/`);
          setIsPrivate(!response.data.is_public);
          setTitle(response.data.title);
          setName(response.data.username);
          setMainCategory(response.data.major_field);
          setSubCategory(response.data.sub_field);
          setDescription(response.data.description);
          setSkill(response.data.skills);
          setCareer(response.data.experiences.join(', '));
          setProjects(response.data.related_projects);
        } catch (error) {
          console.error(error);
        }
      };

      fetchPortfolio();
    }
  }, [isEditMode, portfolio_id]);

  // 포트폴리오 업로드
  const uploadPortfolio = async () => {
    try {
      const data = {
        is_public: !isPrivate,
        title: title,
        username: name,
        major_field: mainCategory,
        sub_field: subCategory,
        description: description,
        skills: skill,
        experiences: career
          .split(',')
          .map((item) => item.trim())
          .filter((item) => item !== ''),
        related_projects: projects,
      };

      const response = await instance.post('pofolo/portfolios/create/', data);
      setPendingAction(() => () => {
        navigate(`/portfolio/${response.data.id}`); // navigate 함수를 저장했다가 '포트폴리오 보기' 클릭 시 넘어감
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 포트폴리오 수정
  const editPortfolio = async () => {
    try {
      const data = {
        is_public: !isPrivate,
        title: title,
        username: name,
        major_field: mainCategory,
        sub_field: subCategory,
        description: description,
        skills: skill,
        experiences: career
          .split(',')
          .map((item) => item.trim())
          .filter((item) => item !== ''),
        related_projects: projects,
      };

      const response = await instance.patch(`pofolo/portfolios/${portfolio_id}/`, data);
      setPendingAction(() => () => {
        navigate(`/portfolio/${response.data.id}`);
      });
    } catch (error) {
      console.error(error);
    }
  };

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
  const handleUploadClick = async () => {
    validateFields();

    if (btnActive) {
      if (isEditMode) {
        await editPortfolio();
      } else {
        await uploadPortfolio();
      }
      setIsCompleteModalOpen(true);
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
    setIsPrivate(true);
    setIsAlertModalOpen(false);
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
            headerText={isEditMode ? '포트폴리오 수정' : '새 포트폴리오'}
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
        mainText={isEditMode ? '포트폴리오가 수정되었어요!' : '포트폴리오가 완성되었어요!'}
        LBtnText="닫기"
        LBtnOnClick={() => navigate('/mypage')} // 닫기를 누르면 이전 페이지(마이페이지)로 이동
        RBtnText="포트폴리오 보기"
        RBtnOnclick={() => {
          if (pendingAction) {
            pendingAction();
          }
        }}
      />
    </>
  );
};
