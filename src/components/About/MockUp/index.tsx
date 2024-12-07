import * as S from '@/components/About/MockUp/styles';
import macbook from '@/assets/webps/About/macbook.webp';
import contents from '@/assets/webps/About/contents.webp';
import { useEffect } from 'react';
import AOS from 'aos';

export const MockUp = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <S.MockUpLayout data-aos="fade-up">
      <img className="macbook" src={macbook} alt="macbook" />
      <div className="contents">
        <img src={contents} alt="contents" />
        <div className="induce-login">
          <p>PoFoLo만의 포트폴리오 관리,</p>
          <p>지금 바로 시작해보세요</p>
          <button>시작하기</button>
        </div>
      </div>
    </S.MockUpLayout>
  );
};
