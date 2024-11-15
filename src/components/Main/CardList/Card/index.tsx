import React from 'react';
import * as S from './styles';

import filledLikeSrc from '@/assets/webps/Main/filledLike.webp';
import defaultCommentSrc from '@/assets/webps/Main/defaultComment.webp';

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
      <S.Reactions>
        <S.Icon src={filledLikeSrc}></S.Icon>
        <S.Letter>{likes}</S.Letter>
        <S.Icon src={defaultCommentSrc}></S.Icon>
        <S.Letter>{comments}</S.Letter>
      </S.Reactions>
    </S.Card>
  );
};

export default Card;
