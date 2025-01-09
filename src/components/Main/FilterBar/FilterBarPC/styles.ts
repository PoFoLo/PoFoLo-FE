import styled from 'styled-components';

export const ControlPanelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7.8rem;
  justify-content: center;
  background-color: white;
  margin-top: 8.8rem;
  margin-bottom: 0.2rem;
`;

export const ControlPanelBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 131.2rem;
  width: 100%;
  height: 4.2rem;
  justify-content: center;
  gap: 1.6rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 12.8rem);
  }
`;
