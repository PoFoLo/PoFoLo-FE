import * as S from '@/components/About/Motivation/styles';
import motive1 from '@/assets/webps/About/about1.webp';
import motive1Blue from '@/assets/webps/About/about1Blue.webp';
import motive2 from '@/assets/webps/About/about2.webp';
import motive2Blue from '@/assets/webps/About/about2Blue.webp';
import motive3 from '@/assets/webps/About/about3.webp';
import motive3Blue from '@/assets/webps/About/about3Blue.webp';

export const Motivation = () => {
  return (
    <S.MotivationLayout>
      <S.Card>
        <S.ImgWrapper>
          <img src={motive1} />
        </S.ImgWrapper>
        <S.TextContainer>
          <img src={motive1Blue} />
          <S.BlurOverlay>
            <h2>
              <p>영감이 필요할 땐?</p>
              <p>다른 프로젝트를 탐색해보세요</p>
            </h2>
            <h6>
              <p>분야별 취준생들의 프로젝트를 살펴보면서</p>
              <p>새로운 아이디어와 자극을 받아보세요</p>
            </h6>
          </S.BlurOverlay>
        </S.TextContainer>
      </S.Card>
      <S.Card>
        <S.TextContainerLeft>
          <img src={motive2Blue} />
          <S.BlurOverlayLeft>
            <h2>
              <p>언제 어디서든</p>
              <p>간편한 내 포트폴리오 관리</p>
            </h2>
            <h6>
              <p>회사/직무 맞춤 포트폴리오를 만들어보세요</p>
              <p>당신의 모든 프로젝트를 손쉽게 관리할 수 있습니다</p>
            </h6>
          </S.BlurOverlayLeft>
        </S.TextContainerLeft>
        <S.ImgWrapperRight>
          <img src={motive2} />
        </S.ImgWrapperRight>
      </S.Card>
      <S.Card>
        <S.ImgWrapper>
          <img src={motive3} />
        </S.ImgWrapper>
        <S.TextContainer>
          <img src={motive3Blue} />
          <S.BlurOverlay>
            <h2>
              <p>함께 도우며</p>
              <p>성장하는 취준생들의 이야기</p>
            </h2>
            <h6>
              <p>막막한 취준생활, 우리는 혼자가 아닙니다</p>
              <p>포폴로가 취업 준비의 부담을 덜어드릴게요</p>
            </h6>
          </S.BlurOverlay>
        </S.TextContainer>
      </S.Card>
    </S.MotivationLayout>
  );
};
