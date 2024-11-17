import React from 'react';
import * as S from './styles';

import filledLikeSrc from '@/assets/webps/Main/filledLike.webp';
import defaultCommentSrc from '@/assets/webps/Main/defaultComment.webp';
import testImageSrc from '@/assets/webps/Main/testImage.webp';

interface CardProps {
  imageUrl: string;
  memberName: string;
  projectName: string;
  likes: number;
  comments: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, memberName, projectName, likes, comments }) => {
  // imageUrl for later images which are real 삭제 안 돼요.
  return (
    <S.Card>
      <S.Image src={testImageSrc} alt={projectName} />
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
