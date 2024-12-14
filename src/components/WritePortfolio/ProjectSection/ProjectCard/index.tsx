import * as S from '@/components/WritePortfolio/ProjectSection/ProjectCard/styles';
import projectLikeFilled from '@/assets/webps/Common/projectLikeFilled.webp';
import projectCommentFilled from '@/assets/webps/Common/projectCommentFilled.webp';
import imageDelete from '@/assets/webps/Common/imageDelete.webp';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    liked_count: number;
    comment_count: number;
    thumbnail: string;
  };
  handleRemoveProject: (id: number) => void;
}

const ProjectCard = ({ project, handleRemoveProject }: ProjectCardProps) => {
  const { id, title, liked_count, comment_count, thumbnail } = project;
  return (
    <S.ProjectCard>
      <S.HoverImageContainer>
        <S.HoverBtn $backgroundImage={imageDelete} onClick={() => handleRemoveProject(id)} />
      </S.HoverImageContainer>
      <S.ProjectImage src={thumbnail} />
      <S.ProjectInfoContainer>
        <S.ProjectTitle>{title}</S.ProjectTitle>
        <S.LikeCommentContainer>
          <S.Icon $backgroundImage={projectLikeFilled} />
          <S.CountText>{liked_count}</S.CountText>
          <S.Icon $backgroundImage={projectCommentFilled} />
          <S.CountText>{comment_count}</S.CountText>
        </S.LikeCommentContainer>
      </S.ProjectInfoContainer>
    </S.ProjectCard>
  );
};

export default ProjectCard;
