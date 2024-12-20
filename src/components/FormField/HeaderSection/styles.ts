import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.p`
  ${(props) => props.theme.fonts.headline4};
  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.headline2};
  `
    )}
`;

export const PrivateCheckBox = styled.label`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  ${(props) => props.theme.fonts.caption3};
  color: ${(props) => props.theme.colors.gray60};
  margin: 0rem 1.6rem 0rem auto;
  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption2};
  `
    )}
`;
