import React from 'react';
import * as S from './styles';
import filledLikeSrc from '@/assets/webps/Main/likeFilled.webp';
import filledCommentSrc from '@/assets/webps/Main/commentFilled.webp';

interface CardProps {
  imageUrl: string;
  memberName: string;
  projectName: string;
  likes: number;
  comments: number;
}
const Card: React.FC<CardProps> = ({ imageUrl, memberName, projectName, likes, comments }) => {
  return (
    <S.Card>
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
