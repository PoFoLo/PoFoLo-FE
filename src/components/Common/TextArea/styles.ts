import styled, { css } from 'styled-components';

export const TextAreaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

export const StyledTextArea = styled.textarea<{ $error: boolean }>`
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => props.theme.colors.gray90};
  background-color: ${(props) => props.theme.colors.gray10};
  padding: 1.15rem 1.2rem;
  padding-right: 6.4rem;
  border: 0.1rem solid
    ${(props) => (props.$error ? props.theme.colors.coral50 : props.theme.colors.gray20)};
  border-radius: 1.2rem;
  resize: none;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;

  &:focus {
    border-color: ${(props) =>
      props.$error ? props.theme.colors.coral50 : props.theme.colors.blue50};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray50};
  }

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.body2};
  `
    )}
  ${(props) =>
    props.theme.media.pc(css`
      padding: 1.4rem 1.6rem;
      padding-right: 6.8rem;
    `)}
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
