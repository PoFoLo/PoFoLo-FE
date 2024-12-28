import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/apis/instance';
import pofoloLogo from '@/assets/webps/Login/pofoloLogo.webp';
import pofoloLogoOpacity from '@/assets/webps/Login/pofoloLogoOpacity.webp';
import * as S from '@/pages/Login/OAuthLoading/styles';

export const OAuthLoading = () => {
  const [showFirstLogo, setShowFirstLogo] = useState(true);
  const nav = useNavigate();

  const fetchToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      try {
        const response = await instance.post('/pofolo/users/login/', { code });

        const { access, refresh, kakao_id, user_id } = response.data;

        if (access) {
          // 기존 회원: 토큰 저장 -> /home 으로 이동
          localStorage.setItem('access_token', access);
          localStorage.setItem('refresh_token', refresh);
          localStorage.setItem('user_id', user_id.toString());
          nav('/home');
        } else if (kakao_id) {
          // 신규 회원: /join 으로 이동
          nav('/join', { state: { kakao_id } });
        } else {
          throw new Error('올바르지 않은 응답');
        }
      } catch (error) {
        console.error('로그인 처리 실패:', error);
        nav('/');
      }
    } else {
      console.error('인가코드가 없습니다.');
      nav('/');
    }
  };

  useEffect(() => {
    fetchToken();
  }, [nav]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstLogo((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Layout>
      <S.LogoWrapper>
        <S.Logo src={pofoloLogo} alt="pofolo logo" $isVisible={showFirstLogo} />
        <S.Logo src={pofoloLogoOpacity} alt="pofolo logo opacity" $isVisible={!showFirstLogo} />
      </S.LogoWrapper>
      <p>PoFoLo에 들어가는 중...</p>
    </S.Layout>
  );
};
