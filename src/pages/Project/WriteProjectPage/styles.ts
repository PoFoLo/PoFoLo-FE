import styled, { css } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 8rem 2rem 8.6rem 2rem;

  ${(props) =>
    props.theme.media.pc(css`
      padding: 8.8rem 6.4rem 8.6rem 6.4rem;
    `)}
`;

export const PortFolioLayout = styled.div`
  width: 100%;
  max-width: 131.2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  margin-top: 1.3rem;

  ${(props) =>
    props.theme.media.pc(css`
      margin-top: 3.6rem;
      gap: 3.2rem;
    `)}
`;
