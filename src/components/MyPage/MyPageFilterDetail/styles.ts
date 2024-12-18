import styled, { css } from 'styled-components';

export const FilterDetailContainer = styled.div`
  width: 100%;
  max-width: 131.2rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  height: 7rem;
  display: flex;
  align-items: center;
  padding-bottom: 3.4rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray5};
`;

export const FilterBtnsContainer = styled.div`
  display: flex;
  width: 43.9rem;
  height: 3.6rem;
  gap: 1.2rem;
`;

export const FilterButton = styled.button<{ selected: boolean }>`
  all: unset; /* 버튼의 기본 스타일 제거 */
  display: flex;
  height: 3.6rem;
  padding: 0.45rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5.6rem;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? css`
          border: 1px solid ${props.theme.colors.blue50};
          background: ${props.theme.colors.blue10};
        `
      : css`
          border: 1px solid ${props.theme.colors.gray10};
          background: ${props.theme.colors.gray5};
        `}
`;

export const FilterLetter = styled.span<{ selected: boolean }>`
  height: 2.7rem;
  ${(props) => props.theme.fonts.caption1};
  ${(props) =>
    props.selected
      ? css`
          color: ${props.theme.colors.blue60};
        `
      : css`
          color: ${props.theme.colors.gray70};
        `}
`;

export const CreateBtnContainer = styled.button`
  display: flex;
  height: 3.6rem;
  padding: 0.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: ${(props) => props.theme.colors.blue50};
  cursor: pointer;
`;

export const CreateBtnLetter = styled.div`
  color: #fff;
  ${(props) => props.theme.fonts.caption1}
`;
