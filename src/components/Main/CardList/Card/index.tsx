import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import filledLikeSrc from '@/assets/webps/Main/likeFilled.webp';
import filledCommentSrc from '@/assets/webps/Main/commentFilled.webp';

interface CardProps {
  cardID: number;
  imageUrl: string;
  memberName: string;
  projectName: string;
  likes: number;
  comments: number;
}
const Card: React.FC<CardProps> = ({
  cardID,
  imageUrl,
  memberName,
  projectName,
  likes,
  comments,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/:${cardID}`); // 이동할 경로
  };

  return (
    <S.Card onClick={handleCardClick}>
      <S.Image src={imageUrl} alt={projectName} />
      <S.MemberName>{memberName}</S.MemberName>
      <S.ProjectName>{projectName}</S.ProjectName>
      <S.ReactionContainer>
        <S.ReactionIcon src={filledLikeSrc}></S.ReactionIcon>
        <S.ReactionLetter>{likes}</S.ReactionLetter>
        <S.ReactionIcon src={filledCommentSrc}></S.ReactionIcon>
        <S.ReactionLetter>{comments}</S.ReactionLetter>
      </S.ReactionContainer>
    </S.Card>
  );
};

export default Card;
