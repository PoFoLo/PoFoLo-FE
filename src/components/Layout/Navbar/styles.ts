import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1312px;
  height: 42px;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  /* NavLeft는 로고를 왼쪽에 고정 */
`;

export const Logo = styled.img`
  width: 134px;
  height: 32px;
  flex-shrink: 0;

  cursor: pointer;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.span<{ width: number }>`
  color: var(--Gray-80, #57585b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.05px;

  width: ${({ width }) => width}px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
`;

export const LoginButton = styled.button`
  color: var(--Gray-70, #74757a);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: 0.04px;
  display: flex;
  height: 32px;
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 0.75px solid var(--Gray-20, #e4e4e6);
  background: #fff;

  cursor: pointer;
  width: 62px;
  margin-left: 32px;
`;
// 추후 Pretendard 글꼴 적용 시 원안인 font-size: 16px로 바꾸기

export const MyPageButton = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 48px;
  border: 1.5px solid var(--Gray-20, #e4e4e6);
  background: url(<path-to-image>) lightgray -16.206px -7.452px / 190.909% 143.182% no-repeat;

  margin-left: 32px;
`;

export const LogoutButtonContainer = styled.button`
  display: flex;
  width: 100px;
  height: 32px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  border: 0.75px solid var(--Gray-20, #e4e4e6);
  background: var(--Gray-05, #f8f8f8);

  cursor: pointer;
  margin-left: 32px;
`;

export const LogoutText = styled.span`
  color: var(--Gray-30, #c9cacf);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.04px;

  width: 56px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 추후 Pretendard 글꼴 적용 시 원안인 font-size: 16px로 바꾸기

export const IconContainer = styled.svg`
  width: 15px;
  height: 14px;
  flex-shrink: 0;
  fill: var(--Gray-30, #c9cacf);
`;
