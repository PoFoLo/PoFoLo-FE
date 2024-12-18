import React from 'react';
import * as S from './styles';
import Card from '@/components/MyPage/MyPageCardList/MyPageCard';
import * as P from '@/components/MyPage/MyPageCardList/MyPageCard/styles'; // PortfolioCard 스타일 컴포넌트 임포트

interface MyPageCardListProps {
  activeTab: 'all' | 'portfolio'; // '모든 프로젝트' 또는 '포트폴리오' 여부
}

const MyPageCardList: React.FC<MyPageCardListProps> = ({ activeTab }) => {
  const dummyCards = Array.from({ length: 7 }, (_, index) => ({
    imageUrl: `/path/to/image${index + 1}.webp`,
    projectName: `프로젝트 이름`,
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));

  return (
    <S.CardListContainer isPortfolioTab={activeTab === 'portfolio'}>
      {dummyCards.map((card, index) =>
        activeTab === 'portfolio' ? (
          <P.PortfolioCard key={index}>
            <P.PortfolioCardImg src={card.imageUrl} alt={card.projectName} />
            <P.ProjectName>{card.projectName}</P.ProjectName>
          </P.PortfolioCard>
        ) : (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            projectName={card.projectName}
            likes={card.likes}
            comments={card.comments}
          />
        )
      )}
    </S.CardListContainer>
  );
};

export default MyPageCardList;
