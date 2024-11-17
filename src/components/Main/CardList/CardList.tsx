import React from 'react';
import Card from './Card';
import * as S from './styles';

interface CardData {
  imageUrl: string;
  memberName: string;
  projectName: string;
  likes: number;
  comments: number;
}

const CardList: React.FC = () => {
  const dummyCards: CardData[] = Array.from({ length: 12 }, (_, index) => ({
    imageUrl: `/path/to/image${index + 1}.webp`,
    memberName: `Member ${index + 1}`,
    projectName: `Project ${index + 1}`,
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));

  return (
    <S.CardListContainer>
      {dummyCards.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          memberName={card.memberName}
          projectName={card.projectName}
          likes={card.likes}
          comments={card.comments}
        />
      ))}
    </S.CardListContainer>
  );
};

export default CardList;
