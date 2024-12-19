import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

export const StyledInput = styled.input<{
  $error: boolean;
  $isDuplicated: boolean;
  $isPrivateCheckbox: boolean;
}>`
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => props.theme.colors.gray90};
  background-color: ${(props) => props.theme.colors.gray10};
  height: 4.4rem;
  padding: 1.15rem 1.2rem;
  padding-right: ${(props) =>
    props.$isDuplicated ? '7.6rem' : props.$isPrivateCheckbox ? '8.5rem' : '6.4rem'};

  border: 0.1rem solid
    ${(props) => (props.$error ? props.theme.colors.coral50 : props.theme.colors.gray20)};
  border-radius: 1.2rem;
  outline: none;

  &:focus {
    border-color: ${(props) =>
      props.$error ? props.theme.colors.coral50 : props.theme.colors.blue50};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray50};
  }

  ${(props) =>
    props.theme.media.tab(
      () => `
      padding-right: ${props.$isDuplicated ? '10rem' : props.$isPrivateCheckbox ? '9rem' : '6.4rem'};
    `
    )}

  ${(props) =>
    props.theme.media.pc(
      () => `
      ${props.theme.fonts.body2};
      height: 5.6rem;
      margin: 0rem;
      padding: 1.45rem 1.6rem;
      padding-right: ${props.$isDuplicated ? '10rem' : props.$isPrivateCheckbox ? '10.5rem' : '6.8rem'};
    `
    )}
`;

export const IconContainer = styled.div<{ $backgroundImage: string }>`
  position: absolute;
  top: 0.8rem;
  right: 1.2rem;
  width: 2.8rem;
  height: 2.8rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;

  ${(props) =>
    props.theme.media.pc(css`
      top: 1.4rem;
      right: 1.6rem;
    `)}
`;

export const ErrorMessage = styled.p`
  ${(props) => props.theme.fonts.caption5};
  color: ${(props) => props.theme.colors.coral50};
  margin: 0.8rem 0rem 0rem 1.2rem;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption4};
  `
    )}
`;
