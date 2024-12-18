import * as S from '@/components/WritePortfolio/ProjectSection/ProjectModal/ModalProjectCard/styles';
import projectLikeFilled from '@/assets/webps/Common/projectLikeFilled.webp';
import projectCommentFilled from '@/assets/webps/Common/projectCommentFilled.webp';
import Checkbox from '@/components/Common/CheckBox';

interface ModalProjectCardProps {
  project: {
    id: number;
    title: string;
    liked_count: number;
    comment_count: number;
    thumbnail: string;
  };
  isChecked: boolean;
  onCheckboxChange: (id: number, checked: boolean) => void;
}
const ModalProjectCard = ({ project, isChecked, onCheckboxChange }: ModalProjectCardProps) => {
  const { id, title, liked_count, comment_count, thumbnail } = project;

  const handleCheckboxClick = () => {
    onCheckboxChange(id, !isChecked);
  };

  return (
    <S.ProjectCard htmlFor={`checkbox-${id}`}>
      <S.CheckboxContainer>
        <Checkbox id={`checkbox-${id}`} checked={isChecked} onChange={handleCheckboxClick} />
      </S.CheckboxContainer>
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

export default ModalProjectCard;
