import * as S from '@/components/WritePortfolio/ProjectSection/ProjectModal/styles';
import modalGoBack from '@/assets/webps/Common/modalGoBack.webp';
import modalClose from '@/assets/webps/Common/modalClose.webp';
import Button from '@/components/Common/Button';
import ModalProjectCard from '@/components/WritePortfolio/ProjectSection/ProjectModal/ModalProjectCard';
import { useEffect, useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';

interface Project {
  id: number;
  title: string;
  liked_count: number;
  comment_count: number;
  thumbnail: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectList: Project[];
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
}
const ProjectModal = ({
  isOpen = false,
  setIsOpen,
  projectList = [],
  selectedIds = [],
  setSelectedIds,
}: ModalProps) => {
  // 모달 내부에서 선택된 프로젝트 id
  const [modalSelectedIds, setModalSelectedIds] = useState<number[]>(selectedIds);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isPC } = useResponsive();

  // 모달 열릴 때 이미 선택되어있던 프로젝트들 정보 전달 + 모바일 버전일때는 애니메이션 실행행
  useEffect(() => {
    if (isOpen) {
      setModalSelectedIds(selectedIds);
      if (!isPC) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    }
  }, [isOpen]);

  // 모달 내부에서 선택되는 프로젝트 관리
  const handleCheckboxChange = (id: number, checked: boolean) => {
    if (checked) {
      setModalSelectedIds((prev) => [...prev, id]);
    } else {
      setModalSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    }
  };

  // 프로젝트 선택 완료 버튼 누르면 선택된 프로젝트 상위 컴포넌트로 전달
  const handleConfirmSelection = () => {
    if (modalSelectedIds.length !== 0) {
      setSelectedIds(modalSelectedIds);
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

  return (
    <>
      {isOpen && (
        <S.ModalOverlay>
          <S.ModalContainer $isAnimating={isAnimating}>
            <S.ModalHeaderContainer>
              <S.ModalTitleContainer>
                <S.GoBackBtn
                  $backgroundImage={isPC ? modalGoBack : modalClose}
                  onClick={() => setIsOpen(false)}
                />
                <S.ModalTitleText>프로젝트 선택</S.ModalTitleText>
              </S.ModalTitleContainer>
              <Button
                size={isPC ? 'medium' : 'small'}
                type={modalSelectedIds.length === 0 ? 'inactive' : 'main'}
                onClick={handleConfirmSelection}
              >
                {modalSelectedIds.length}개 선택
              </Button>
            </S.ModalHeaderContainer>
            <S.ProjectCardContainer>
              {projectList.map((project) => (
                <ModalProjectCard
                  key={project.id}
                  project={project}
                  isChecked={modalSelectedIds.includes(project.id)}
                  onCheckboxChange={handleCheckboxChange}
                />
              ))}
            </S.ProjectCardContainer>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default ProjectModal;
