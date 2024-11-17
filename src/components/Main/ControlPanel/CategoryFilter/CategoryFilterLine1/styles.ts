import styled from 'styled-components';

export const filterLine1Container = styled.div`
  display: flex;
  width: 38rem;
  height: 4rem;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`;

export const filterLine1BtnContainer = styled.button`
  display: flex;
  height: 3.6rem;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5.6rem;
  border: 1px solid ${(props) => props.theme.colors.gray10});
  background: ${(props) => props.theme.colors.gray05};
  cursor: pointer;
`;

export const filterLine1BtnLetter = styled.span`
  height: 2.7rem;
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.caption1};
`;

export const defaultText = styled.span`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.caption2};
`;
