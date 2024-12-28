import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - 토큰 추가
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor - 토큰 갱신
instance.interceptors.response.use(
  (response) => response, // 성공 응답은 그대로 반환
  async (error) => {
    const originalRequest = error.config;

    // 토큰 만료 처리
    if (
      error.response?.status === 401 && // 인증 오류
      !originalRequest._retry // 재시도 방지 플래그
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          // 토큰 갱신 요청
          const { data } = await instance.post('/pofolo/users/token/refresh', {
            refresh: refreshToken,
          });

          const newAccessToken = data.access;

          // 새로운 access 토큰 저장
          localStorage.setItem('access_token', newAccessToken);

          // 갱신된 토큰으로 헤더 업데이트 후 재요청
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          console.error('토큰 갱신 실패:', refreshError);
          // 갱신 실패 시 로그아웃 처리
          // 갱신 실패 시 로그아웃 처리
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user_id');
          window.location.href = '/';
        }
      }
    }
    return Promise.reject(error);
  }
);
