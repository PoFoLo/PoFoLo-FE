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
      <img className="contents" src={contents} alt="contents" />
    </S.MockUpLayout>
  );
};
