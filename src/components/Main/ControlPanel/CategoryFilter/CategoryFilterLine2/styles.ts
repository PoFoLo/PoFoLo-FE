import styled from 'styled-components';

export const filterLine2Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const filterLine2BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  height: 2.2rem;
  cursor: pointer;
`;

export const filterLine2BtnIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const filterLine2BtnLetter = styled.span<{ selected: boolean }>`
  height: 2.2rem;
  color: ${(props) => (props.selected ? props.theme.colors.gray90 : props.theme.colors.gray50)};
  ${(props) => props.theme.fonts.caption2};
`;
