import styled, { css } from 'styled-components';

export const TabsLayout = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  padding: 1.6rem 0 2.8rem 0;

  background-color: ${(props) => props.theme.colors.gray5};

  ${(props) =>
    props.theme.media.ph(css`
      width: 100%;
      height: 4rem;
      padding: 0rem;

      background-color: #fff;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 100%;
      height: 4rem;
      padding: 0rem;

      background-color: #fff;
    `)}
`;

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 131.2rem;
  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.8rem;
  margin-bottom: 2.8rem;
  gap: 1.6rem;
  background-color: ${(props) => props.theme.colors.gray5};

  ${(props) =>
    props.theme.media.ph(css`
      margin: 0 2rem;
      width: calc(100% - 4rem);
      height: 4rem;
      margin-bottom: 0rem;
      gap: 0rem;
      background-color: #fff;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin: 0 2rem;
      width: calc(100% - 4rem);
      height: 4rem;
      margin-bottom: 0rem;
      gap: 0rem;
      background-color: #fff;
    `)}
`;

export const TabContainer = styled.div<{ active?: boolean }>`
  display: flex;
  height: 4.8rem;
  padding: 1rem 0.6rem 0.6rem 0.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-radius: 0.8rem;
  background: ${(props) => (props.active ? props.theme.colors.blue10 : '#fff')};
  cursor: pointer;
`;

export const TabLetter = styled.div<{ active?: boolean }>`
  color: ${(props) => (props.active ? props.theme.colors.blue60 : 'var(--blue-50, #598df6)')};
  ${(props) => props.theme.fonts.subhead3};
  height: 2.4rem;
`;

export const TabIcon = styled.div<{ active?: boolean }>`
  width: 3.5rem;
  height: 0.3rem;
  border-radius: 2rem;
  background: ${(props) => (props.active ? props.theme.colors.blue40 : '#fff')};
`;

export const TabContainerTabletMobile = styled.div<{ active?: boolean }>`
  // Clear.
  display: flex;
  justify-content: center;
  align-items: center;
  //flex: 1 0 0;
  border-bottom: 0.2rem solid ${(props) => (props.active ? 'var(--blue-50, #598df6)' : '#fff')};
  background-color: ${(props) => (props.active ? 'var(--Blue-5, #F3F7FF)' : '#fff')};

  width: 39.7rem;
  height: 4rem;
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(css`
      padding: 0.95rem 4.15rem 0.75rem 4.15rem;
    `)}
`;

export const TabLetterTabletMobile = styled.div<{ active?: boolean }>`
  // Clear.
  color: ${(props) => (props.active ? props.theme.colors.blue60 : 'var(--blue-50, #598df6)')};
  font-family: 'Pretendard'; // Single quotes should enclose the word.
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 2.1rem */
  letter-spacing: 0.0035rem;

  height: 2.1rem;
`;
