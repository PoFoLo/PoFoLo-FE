import * as S from '@/pages/Main/MainPage/styles';
import LoginModal from '@/components/Common/LoginModal';
import { useState } from 'react';

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // 임시
  return (
    <S.Layout>
      MainPage입니다.
      <LoginModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </S.Layout>
  );
};
