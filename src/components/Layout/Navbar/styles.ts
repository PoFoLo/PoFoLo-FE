import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 6.4rem;
  justify-content: space-between;

  position: fixed;
  zindex: 10;
`;

export const NavLeft = styled.div`
  /* NavLeft는 로고를 왼쪽에 고정 */
`;

export const Logo = styled.img`
  width: 13.4rem;
  height: 3.2rem;
  flex-shrink: 0;

  cursor: pointer;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.span<{ width: number }>`
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.subhead2};

  width: ${({ width }) => width}rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3.2rem;
`;
/*
color: var(--Gray-80, #57585b);
font-family: Pretendard;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 150%;
letter-spacing: 0.005rem;
*/

export const LoginButton = styled.button`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.subhead3};
  display: flex;
  height: 3.2rem;
  padding: 0.2rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: 0.075rem solid var(--Gray-20, #e4e4e6);
  background-color: white;

  cursor: pointer;
  width: 6.2rem;
  margin-left: 3.2rem;
`;
// 추후 Pretendard 글꼴 적용 시 원안인 font-size: 1.6rem로 바꾸기
/*
color: var(--Gray-70, #74757a);
font-family: Pretendard;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 150%;
letter-spacing: 0.004rem;
display: flex;
height: 3.2rem;
padding: 0.2rem 1rem;
justify-content: center;
align-items: center;
gap: 1rem;
border-radius: 0.8rem;
border: 0.075rem solid var(--Gray-20, #e4e4e6);
background: #fff;
*/

export const MyPageButton = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const MyPageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LogoutButtonContainer = styled.button`
  display: flex;
  width: 10rem;
  height: 3.2rem;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 0.8rem;
  border: 0.075rem solid ${(props) => props.theme.colors.gray20};
  background-color: ${(props) => props.theme.colors.gray05};

  cursor: pointer;
  margin-left: 3.2rem;
`;

export const LogoutText = styled.span`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fonts.caption2};

  width: 5.6rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 추후 Pretendard 글꼴 적용 시 원안인 font-size: 1.6rem로 바꾸기

export const IconContainer = styled.img`
  width: 1.5rem;
  height: 1.4rem;
  flex-shrink: 0;
`;
