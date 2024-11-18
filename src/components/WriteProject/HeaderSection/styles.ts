import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4.2rem;
`;

export const HeaderText = styled.p`
  ${(props) => props.theme.fonts.headline2};
`;

export const PrivateCheckBox = styled.label`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  ${(props) => props.theme.fonts.caption2};
  color: ${(props) => props.theme.colors.gray60};
  margin: 0rem 1.6rem 0rem auto;
`;
