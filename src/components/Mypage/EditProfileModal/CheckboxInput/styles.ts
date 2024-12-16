import styled, { css } from 'styled-components';
export { InputContainer } from '@/components/Common/Input/styles';
export { ErrorMessage } from '@/components/Common/Input/styles';

export const StyledInput = styled.input<{ $error: boolean }>`
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => props.theme.colors.gray90};
  background-color: ${(props) => props.theme.colors.gray10};
  padding: 1.15rem 1.2rem;
  padding-right: 8.4rem;
  border: 0.1rem solid
    ${(props) => (props.$error ? props.theme.colors.coral50 : props.theme.colors.gray20)};
  border-radius: 1.2rem;
  outline: none;
  box-sizing: border-box;

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
      padding-right: 11rem;
    `)}
`;

export const CheckboxLabel = styled.label`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.gray60};
  display: flex;
  gap: 0.8rem;
  align-items: center;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption2};
  `
    )}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      top: 1.4rem;
      right: 1.8rem;
    `)}
`;
