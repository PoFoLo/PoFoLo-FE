import * as S from '@/components/WritePortfolio/ProjectSection/styles';
import ProjectCard from '@/components/WritePortfolio/ProjectSection/ProjectCard';
import ProjectModal from '@/components/WritePortfolio/ProjectSection/ProjectModal';
import projectAddBtn from '@/assets/svgs/WritePortfolio/projectAddBtn.svg';
import projectAddPCBtn from '@/assets/svgs/WritePortfolio/projectAddPCBtn.svg';
import { mockProjects } from './mockData'; // 임시 데이터
import { useState, useEffect, useRef } from 'react';
import { useResponsive } from '@/hooks/useResponsive';

interface ProjectSectionProps {
  projects: number[];
  setProjects: React.Dispatch<React.SetStateAction<number[]>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  error: boolean;
}

const ProjectSection = ({ projects, setProjects, setErrors, error }: ProjectSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousProjectCount = useRef(0);
  const { isPC } = useResponsive();

  // 프로젝트 선택 되면 에러 false
  useEffect(() => {
    if (projects.length > 0) {
      setErrors((prev) => ({ ...prev, projects: false }));
    }
  }, [projects, setErrors]);

  // 스크롤을 오른쪽으로 이동 (새 프로젝트가 추가된 경우에만)
  useEffect(() => {
    if (containerRef.current && projects.length > previousProjectCount.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth - containerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
    previousProjectCount.current = projects.length;
  }, [projects]);

  // 선택된 프로젝트
  const selectedData = mockProjects.filter((project) => projects.includes(project.id));

  // 선택된 프로젝트 삭제
  const handleRemoveProject = (id: number) => {
    setProjects((prev) => prev.filter((projectId) => projectId !== id));
  };

  return (
    <>
      <S.SectionContainer>
        <S.SectionTitle>프로젝트</S.SectionTitle>
        <S.ProjectContainer>
          <S.StyledScrollContainer innerRef={containerRef} vertical={false}>
            {selectedData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                handleRemoveProject={handleRemoveProject}
              />
            ))}
            <S.AddBtn
              $backgroundImage={isPC ? projectAddPCBtn : projectAddBtn}
              onClick={() => setIsModalOpen(true)}
            />
          </S.StyledScrollContainer>
          {error && <S.ErrorMessage>필수 선택 항목입니다.</S.ErrorMessage>}
        </S.ProjectContainer>
      </S.SectionContainer>
      <ProjectModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        projectList={mockProjects}
        selectedIds={projects}
        setSelectedIds={setProjects}
      />
    </>
  );
};

export default ProjectSection;
