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

  ${(props) =>
    props.theme.media.ph(css`
      width: 27.5rem;
      height: 2.7rem;
      align-items: flex-start;
      border-radius: 200rem;
    `)}
`;

export const FilterButton = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.6rem;
  padding: 0.35rem 1.3rem;
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

  ${(props) =>
    props.theme.media.ph(css`
      height: 2.7rem;
      padding: 0.525rem 0.825rem;
      border-radius: 4.2rem;
      border: 0.075rem solid
        ${props.selected
          ? css`
              border: 0.075rem solid ${props.theme.colors.blue50};
              background: ${props.theme.colors.blue10};
            `
          : css`
              border: 0.075rem solid ${props.theme.colors.gray10};
              background: ${props.theme.colors.gray5};
            `};
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 2.7rem;
      padding: 0.525rem 0.825rem;
      border-radius: 4.2rem;
      border: 0.075rem solid
        ${props.selected
          ? css`
              border: 0.075rem solid ${props.theme.colors.blue50};
              background: ${props.theme.colors.blue10};
            `
          : css`
              border: 0.075rem solid ${props.theme.colors.gray10};
              background: ${props.theme.colors.gray5};
            `};
    `)}
`;

export const FilterLetter = styled.span<{ selected: boolean }>`
  ${(props) => props.theme.fonts.caption1};
  ${(props) =>
    props.selected
      ? css`
          color: ${props.theme.colors.blue60};
        `
      : css`
          color: ${props.theme.colors.gray70};
        `}

  height: 2.7rem;

  ${(props) =>
    props.theme.media.ph(css`
      font-family: 'Pretendard';
      font-size: 13.5px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 20.25px */
      letter-spacing: 0.034px;

      height: 1.5rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      font-family: 'Pretendard';
      font-size: 13.5px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 20.25px */
      letter-spacing: 0.034px;

      height: 1.5rem;
    `)}
`;

export const uploadButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  background: var(--blue, linear-gradient(135deg, #4b7aff 0%, #5c8ef3 100%));
  border-radius: 1.2rem;
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

export const CreatePortfolioBtnContainer = styled.button`
  display: flex;
  height: 3.6rem;
  padding: 0.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: ${(props) => props.theme.colors.blue50};
  cursor: pointer;

  // Waiting for the designer's plan
  ${(props) => props.theme.media.ph(css``)}

  ${(props) => props.theme.media.tab(css``)}
`;

export const CreatePortfolioBtnLetter = styled.div`
  color: #fff;
  ${(props) => props.theme.fonts.caption1}

  // Waiting for the designer's plan
  ${(props) => props.theme.media.ph(css``)}

  ${(props) => props.theme.media.tab(css``)}
`;
