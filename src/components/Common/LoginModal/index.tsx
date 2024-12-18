import * as S from '@/components/Common/LoginModal/styles';
import modalClose from '@/assets/webps/Common/modalClose.webp';
import loginModalLogo from '@/assets/webps/Common/loginModalLogo.webp';
import kakaoLogin from '@/assets/webps/Common/kakaoLogin.webp';
import { useRef, useEffect, useCallback } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKakaoLogin = () => {
    const clientId = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const redirectUri = encodeURIComponent(import.meta.env.VITE_KAKAO_REDIRECT_URI);
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = kakaoLoginUrl;
  };

  // 모달 열렸을 때 외부 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 모달 외부 클릭 시 닫히게
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      {isOpen && (
        <S.ModalOverlay>
          <S.ModalContainer ref={modalRef}>
            <S.CloseBtn $backgroundImage={modalClose} onClick={() => setIsOpen(false)} />
            <S.PofoloLogo alt="Pofolo 로고" src={loginModalLogo} />
            <S.LoginBtn $backgroundImage={kakaoLogin} onClick={handleKakaoLogin} />
            <S.ModalText>로그인하고 PoFoLo의 모든 기능을 이용해보세요!</S.ModalText>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default LoginModal;
