import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FloatingBtnLayout = styled.div`
  width: 100%;
  max-width: 131.2rem;
  position: relative;

  @media (max-width: 1440px) {
    width: calc(100% - 12.8rem);
  }
`;

export const FloatingBtnContainer = styled.div`
  width: 13.2rem;
  height: 6.2rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 8rem;
  right: calc(50% - 65.6rem);
  gap: 2rem;

  @media (max-width: 1440px) {
    right: 6.4rem;
  }

  ${(props) =>
    props.theme.media.ph(css`
      right: calc(50% - 5rem);
      bottom: 2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      right: 2rem;
      bottom: 2rem;
    `)}
`;

export const FloatingBtnBody = styled.div`
  display: flex;
  width: 131.2rem;
  height: 6.4rem;
  justify-content: flex-end;
  align-items: center;
  z-index: 20;
`;
