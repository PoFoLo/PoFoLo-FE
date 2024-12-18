import styled, { css } from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  width: 131.2rem;
  padding: 1.6rem 0 0 0;
  align-items: center;
  gap: 1.6rem;
  margin: 0 auto;

  ${(props) =>
    props.theme.media.pc(css`
      width: 100%;
      padding: 1.6rem 6.4rem 0;
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
