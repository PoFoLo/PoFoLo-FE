import Navbar from '@/components/Layout/Navbar/Navbar';
import { Title } from '@/components/About/Title';
import { Motivation } from '@/components/About/Motivation';
import * as S from '@/pages/About/AboutPage/styles';
import { MockUp } from '@/components/About/MockUp';

export const AboutPage = () => {
  return (
    <S.Layout>
      <Navbar />
      <Title />
      <Motivation />
      <MockUp />
    </S.Layout>
  );
};
