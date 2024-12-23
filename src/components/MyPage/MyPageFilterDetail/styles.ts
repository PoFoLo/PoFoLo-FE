import styled, { css } from 'styled-components';

export const FilterAllProjectColorContainer = styled.div`
  width: 100%;
  height: 8.2rem;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray5};

  ${(props) =>
    props.theme.media.ph(css`
      height: 7.9rem;
      background-color: #fff;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 7.9rem;
      background-color: #fff;
    `)}
`;

export const FilterAllProjectContainer = styled.div`
  width: 100%;
  max-width: 131.2rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  height: 8.2rem;
  display: flex;
  align-items: center;
  padding: 1.2rem 0 3.4rem 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray5};

  ${(props) =>
    props.theme.media.ph(css`
      height: 7.9rem;
      padding: 2rem 0rem 3.2rem 0rem;
      margin: 0rem 2rem;
      width: calc(100% - 4rem);
      background-color: #fff;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 7.9rem;
      padding: 2rem 0rem 3.2rem 0rem;
      margin: 0rem 2rem;
      width: calc(100% - 4rem);
      background-color: #fff;
    `)}
`;

export const FilterBtnsContainer = styled.div`
  display: flex;
  width: 43.9rem;
  height: 3.6rem;
  gap: 1.2rem;
  flex: 1 0 0;
`;

export const FilterButton = styled.button<{ selected: boolean }>`
  display: flex;
  height: 3.6rem;
  padding: 0.35rem 1.3rem;
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

export const FilterPortfolioColorContainer = styled.div`
  width: 100%;
  height: 8.6rem;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray5};

  ${(props) =>
    props.theme.media.ph(css`
      height: 7.9rem;
      background-color: #fff;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 7.9rem;
      background-color: #fff;
    `)}
`;

export const FilterPortfolioContainer = styled.div`
  width: 100%;
  max-width: 131.2rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  height: 8.6rem;
  display: flex;
  align-items: center;
  padding: 1.4rem 0 3.6rem 0;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.gray5};

  ${(props) =>
    props.theme.media.ph(css`
      height: 7.9rem;
      padding: 2rem 0rem 3.2rem 0rem;
      margin: 0rem 2rem;
      width: calc(100% - 4rem);
      background-color: #fff;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 7.9rem;
      padding: 2rem 0rem 3.2rem 0rem;
      margin: 0rem 2rem;
      width: calc(100% - 4rem);
      background-color: #fff;
    `)}
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
