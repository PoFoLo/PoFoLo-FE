import * as S from '@/components/About/Motivation/styles';
import { MotivationCard } from '@/components/About/Motivation/MotivationCard';
import { motivationData } from '@/constants/About/motivationData';
import { useResponsive } from '@/hooks/useResponsive';

export const Motivation = () => {
  const { isPhone } = useResponsive();

  const adjustedMotivationData = motivationData.map((item) => ({
    ...item,
    reverse: isPhone ? false : item.reverse,
  }));

  return (
    <S.MotivationLayout>
      {adjustedMotivationData.map((item, index) => (
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
