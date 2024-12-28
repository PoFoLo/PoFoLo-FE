import React from 'react';
import * as S from './styles';
import Card from '@/components/MyPage/MyPageCardList/MyPageCard';
import * as P from '@/components/MyPage/MyPageCardList/MyPageCard/styles';
import defaultPortfolioThumbnailSrc from '@/assets/webps/MyPage/defaultPortfolioThumbnail.webp';

interface MyPageCardListProps {
  activeTab: 'allProjects' | 'portfolio';
}

const MyPageCardList: React.FC<MyPageCardListProps> = ({ activeTab }) => {
  const dummyCards = Array.from({ length: 7 }, (_, index) => ({
    imageUrl: `/path/to/image${index + 1}.webp`,
    projectName: `프로젝트 이름`,
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));

  return (
    <S.CardListColorContainer>
      <S.CardListContainer isPortfolioTab={activeTab === 'portfolio'}>
        {dummyCards.map((card, index) =>
          activeTab === 'portfolio' ? (
            <P.PortfolioCard key={index}>
              <P.PortfolioCardImg
                src={defaultPortfolioThumbnailSrc}
                alt={'defaultPortfolioThumbnail'}
              />
              <P.ProjectName>포트폴리오 이름</P.ProjectName>
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
    </S.CardListColorContainer>
  );
};

export default MyPageCardList;
