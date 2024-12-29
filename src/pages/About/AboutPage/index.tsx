import Navbar from '@/components/Layout/Navbar/index';
import { Title } from '@/components/About/Title';
import { Motivation } from '@/components/About/Motivation';
import * as S from '@/pages/About/AboutPage/styles';
import { MockUp } from '@/components/About/MockUp';

const AboutPage = () => {
  return (
    <S.Layout>
      <Navbar />
      <Title />
      <Motivation />
      <MockUp />
    </S.Layout>
  );
};

export default AboutPage;