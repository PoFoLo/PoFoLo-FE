import styled from 'styled-components';

export const SortDropdownContainer = styled.div`
  width: 38rem;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
`;

export const DropdownContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectedContainer = styled.div`
  display: inline-flex;
  padding: 0.8rem 1.2rem;
  align-items: flex-start;
  gap: 0.8rem;
  cursor: pointer;
`;

export const SelectedLetter = styled.span`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.body3};
  width: 4.2rem;
  height: 2.4rem;
`;

export const SelectedCaret = styled.img`
  width: 1.8rem;
  height: 2.4rem;
`;

export const MenuContainer = styled.div`
  display: inline-flex;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  align-items: flex-start;
  border-radius: 0.8rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray10};
  background: #fff;
  box-shadow: 0rem 0rem 1.6rem 0rem rgba(0, 0, 0, 0.05);
  width: 9.2rem;
  height: 7.4rem;
  z-index: 10;
  display: block;
  opacity: 1;
`;

export const MenuLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const Inactive = styled.span`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.body3};
  width: 4.2rem;
  height: 2.4rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray10};
  }
`;

export const Active = styled.span`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.body3};
  width: 4.2rem;
  height: 2.4rem;
  cursor: pointer;
`;
