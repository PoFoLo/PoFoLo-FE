import styled, { keyframes, css } from 'styled-components';

// 흔들림 애니메이션 정의
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
`;

// 비활성화 상태 컨테이너
export const InactiveContainer = styled.div`
  display: flex;
  width: 36rem;
  height: 4rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 4.4rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray10};
  background: #fff;
  box-shadow: 0rem 0rem 1.6rem 0rem rgba(0, 0, 0, 0.05);
  cursor: text;

  transition:
    border 0.2s ease-in-out,
    background 0.2s ease-in-out,
    color 0.2s ease-in-out;

  // This code doesn't work when it's after the &:hover lines.
  ${(props) =>
    props.theme.media.ph(css`
      height: 3rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 3rem;
    `)}
      
  &:hover {
    border-radius: 4.4rem;
    border: 0.1rem solid var(--Blue-20, #cbdcff);
    background: var(--Blue-5, #f3f7ff);

    // InactiveLetter의 색상 변경
    & > span {
      color: ${(props) => props.theme.colors.blue30};
    }
  }
`;

export const InactiveLetter = styled.span`
  width: 3.2rem;
  height: 2.7rem;
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.body2};
`;

export const InactiveIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const InactiveIconHover = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

// 활성화 상태 컨테이너 (흔들림 효과 포함)
export const ActiveContainer = styled.div<{ isError?: boolean; isSubmitted?: boolean }>`
  display: flex;
  width: 36rem;
  height: 4rem;
  padding: 1.2rem;
  justify-content: ${({ isSubmitted }) => (isSubmitted ? 'center' : 'space-between')};
  align-items: center;
  gap: 0.8rem;
  border-radius: 4.4rem;
  border: 1px solid ${(props) => props.theme.colors.blue30};
  background: #fff;
  box-shadow: 0rem 0rem 1.6rem 0rem rgba(0, 0, 0, 0.05);

  ${(props) =>
    props.isError &&
    css`
      animation: ${shake} 0.3s ease-in-out;
    `}
  ${(props) =>
    props.theme.media.ph(css`
      height: 3rem;
      padding: 0.9rem;
    `)}
    ${(props) =>
    props.theme.media.tab(css`
      height: 3rem;
      padding: 0.9rem;
    `)};
`;

export const ActiveInput = styled.input`
  all: unset; /* 기본 스타일 초기화 */
  width: 30.6rem;
  height: 2.7rem;
  color: ${(props) => props.theme.colors.gray90};
  ${(props) => props.theme.fonts.body2};
  outline: none; /* 기본 outline 제거 */

  ${(props) =>
    props.theme.media.ph(css`
      width: 18rem;
    `)}

  ${(props) => props.theme.media.tab(css``)}
`;

export const ActiveIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 1.35rem;
      height: 1.35rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 1.35rem;
      height: 1.35rem;
    `)}
`;

export const ActiveLetter = styled.span`
  color: ${(props) => props.theme.colors.blue60};
  ${(props) => props.theme.fonts.body2};
`;
