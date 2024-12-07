import * as S from '@/components/About/Motivation/styles';
import { MotivationCard } from '@/components/About/Motivation/MotivationCard';
import { motivationData } from '@/constants/About/motivationData';

export const Motivation = () => {
  return (
    <S.MotivationLayout>
      {motivationData.map((item, index) => (
        <MotivationCard
          key={index}
          image={item.image}
          overlayImage={item.overlayImage}
          title={item.title}
          description={item.description}
          reverse={item.reverse}
        />
      ))}
    </S.MotivationLayout>
  );
};
