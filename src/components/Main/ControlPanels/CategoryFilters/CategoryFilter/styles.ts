import styled from 'styled-components';

interface ButtonProps {
  selected: boolean;
}

export const filterLine1Container = styled.div`
  display: flex;
  width: 38rem;
  height: 4rem; /* 고정 높이 */
  justify-content: flex-start;
  align-items: center; /* 버튼 수직 정렬 고정 */
  gap: 2rem;
`;

export const filterLine1BtnContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center; /* 버튼 내부 정렬 */
  height: 3.6rem; /* 고정 높이 */
  padding: 0.8rem 1.2rem;
  border-radius: 5.6rem;
  cursor: pointer;
  box-sizing: border-box; /* 높이 변화 방지 */
  background: ${({ selected, theme }) => (selected ? theme.colors.blue10 : theme.colors.gray5)};
  box-shadow: ${({ selected, theme }) =>
    selected ? `0 0 0 2px ${theme.colors.blue50}` : `0 0 0 2px ${theme.colors.gray10}`};
  &:focus {
    outline: none; /* 포커스 기본 스타일 제거 */
  }
  &:active {
    transform: scale(1); /* 클릭 시 크기 변화 방지 */
  }
`;

export const filterLine1BtnLetter = styled.span<ButtonProps>`
  height: 2.7rem;
  color: ${({ selected, theme }) =>
    selected ? `${theme.colors.blue60}` : `${theme.colors.gray70}`};
  ${(props) => props.theme.fonts.caption1};
`;

export const defaultText = styled.span`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.caption2};
`;
