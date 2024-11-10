import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.4rem 6.4rem 20rem 6.4rem;
`;

export const PortFolioLayout = styled.div`
  width: 100%;
  max-width: 131.2rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4.2rem;
`;

export const HeaderText = styled.p`
  ${(props) => props.theme.fonts.headline2};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  margin-top: 3.6rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SectionTitle = styled.p`
  ${(props) => props.theme.fonts.caption1};
  width: 12.8rem;
  min-width: 12.8rem;
  height: 5.6rem;
  padding: 1.6rem 0rem;
  align-items: center;
  opacity: 0.7;
  box-sizing: border-box;
`;

export const PrivateCheckBox = styled.label`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  ${(props) => props.theme.fonts.caption2};
  color: ${(props) => props.theme.colors.gray60};
  margin: 0rem 1.6rem 0rem auto;
`;
