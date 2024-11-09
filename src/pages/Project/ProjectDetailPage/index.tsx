import { Comment } from '@/components/ProjectDetail/Comment';
import { ProjectContent } from '@/components/ProjectDetail/ProjectContent';
import * as S from '@/pages/Project/ProjectDetailPage/styles';

export const ProjectDetailPage = () => {
  return (
    <S.Layout>
      <ProjectContent />
      <Comment />
    </S.Layout>
  );
};
