import React from 'react';
import Card from './Card';
import * as S from './styles';
import defaultProjectImgSrc from '@/assets/webps/Main/defaultProjectImg.webp';

interface CardData {
  id: number;
  thumbnail: string | null; // 이미지 URL 또는 null
  writer_name: string; // 작성자 이름
  title: string; // 프로젝트 제목
  liked_count: number; // 좋아요 수
  comment_count: number; // 댓글 수
}

interface Props {
  cards: CardData[];
}

const CardList: React.FC<Props> = ({ cards }) => {
  return (
    <S.CardListContainer>
      <S.CardList>
        {cards.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.thumbnail || defaultProjectImgSrc}
            memberName={card.writer_name}
            projectName={card.title}
            likes={card.liked_count}
            comments={card.comment_count}
          />
        ))}
      </S.CardList>
    </S.CardListContainer>
  );
};

export default CardList;
