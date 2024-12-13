import { useLocation, useNavigate } from 'react-router-dom';

export const JoinPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { kakao_id } = location.state || {}; // state에서 kakao_id 추출

  if (!kakao_id) {
    nav('/');
  }

  return <div>JoinPage</div>;
};
