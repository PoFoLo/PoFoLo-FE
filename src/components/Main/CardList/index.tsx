import React, { useEffect, useRef, useState, useCallback } from 'react';
import Card from '@/components/Main/CardList/Card/index';
import * as S from '@/components/Main/CardList/styles';

interface CardData {
  imageUrl: string;
  memberName: string;
  projectName: string;
  likes: number;
  comments: number;
}

interface CardListProps {
  initialCards: CardData[]; // 초기 카드 데이터
  loadMore: () => Promise<CardData[]>; // 더 많은 카드를 불러오는 함수
}

const CardList: React.FC<CardListProps> = ({ initialCards, loadMore }) => {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setLoading(true);
        const newCards = await loadMore();
        setCards((prevCards) => [...prevCards, ...newCards]);
        setLoading(false);
      }
    },
    [loading, loadMore]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '50px',
      threshold: 1.0,
    });
    if (loadMoreRef.current) observer.current.observe(loadMoreRef.current);
  }, [handleObserver]);

  return (
    <>
      <S.CardList>
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            memberName={card.memberName}
            projectName={card.projectName}
            likes={card.likes}
            comments={card.comments}
          />
        ))}
      </S.CardList>
      <div ref={loadMoreRef} style={{ height: '2rem' }}></div>
      {loading && <p>Loading...</p>}
    </>
  );
};

export default CardList;
