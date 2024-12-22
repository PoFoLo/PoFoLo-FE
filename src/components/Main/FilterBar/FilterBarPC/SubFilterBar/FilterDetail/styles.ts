import styled from 'styled-components';

export const FilterDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  height: 2.2rem;
`;

export const FilterDetailBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  height: 5rem;
  cursor: pointer;
`;

export const FilterDetailBtnIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const FilterDetailBtnLetter = styled.span<{ selected: boolean }>`
  color: ${(props) => (props.selected ? props.theme.colors.gray90 : props.theme.colors.gray50)};
  ${(props) => props.theme.fonts.caption2};
  height: 2.2rem;
`;
