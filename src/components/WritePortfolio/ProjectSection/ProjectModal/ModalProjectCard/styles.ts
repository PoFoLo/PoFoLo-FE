import styled from 'styled-components';
import { ProjectImage } from '@/components/WritePortfolio/ProjectSection/ProjectCard/styles';

export const ProjectCard = styled.label`
  display: flex;
  flex-direction: column;
  width: 38rem;
  position: relative;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 1.2rem;
  right: 1.2rem;
`;

export const LProjectImage = styled(ProjectImage)`
  width: 38rem;
  height: 21.3rem;
`;

export * from '@/components/WritePortfolio/ProjectSection/ProjectCard/styles';
