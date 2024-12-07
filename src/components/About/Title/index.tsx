import * as S from '@/components/About/Title/styles';
import pofoloLogo from '@/assets/videos/About/pofoloLogo.mp4';

export const Title = () => {
  return (
    <S.TitleSection>
      <S.PofoloLogo autoPlay loop muted playsInline>
        <source src={pofoloLogo} type="video/mp4" />
      </S.PofoloLogo>
      <S.Title>모든 IT취업 포트폴리오는 이곳에.</S.Title>
      <S.Description>
        <p>나만의 포트폴리오를 만들고 공유해보아요</p>
        <p>당신의 이야기가 세상을 변화시킬 수 있습니다</p>
      </S.Description>
    </S.TitleSection>
  );
};
