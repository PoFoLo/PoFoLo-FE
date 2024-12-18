import styled, { css } from 'styled-components';

export const TabsColorContainer = styled.div`
  width: 100%;
  height: 9.2rem;
  display: flex;
  justify-content: center;
  padding: 1.6rem 0 2.8rem 0;
  background-color: ${(props) => props.theme.colors.gray5};
`;

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 131.2rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  height: 4.8rem;
  margin-bottom: 2.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  background-color: ${(props) => props.theme.colors.gray5};
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

export const TabLetter = styled.div`
  color: ${(props) => props.theme.colors.blue60};
  ${(props) => props.theme.fonts.subhead3};
  height: 2.4rem;
`;

export const TabIcon = styled.div<{ active?: boolean }>`
  width: 3.5rem;
  height: 0.3rem;
  border-radius: 2rem;
  background: ${(props) => (props.active ? props.theme.colors.blue40 : '#fff')};
`;
