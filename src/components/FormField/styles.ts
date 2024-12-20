import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props) =>
    props.theme.media.pc(css`
      flex-direction: row;
    `)}
`;

export const SectionTitle = styled.p`
  ${(props) => props.theme.fonts.caption3};
  color: ${(props) => props.theme.colors.gray70};
  width: 12.8rem;
  min-width: 12.8rem;
  padding: 1.6rem 0rem;
  align-items: center;
  box-sizing: border-box;
  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption1};
  `
    )}
`;
