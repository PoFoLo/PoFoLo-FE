import styled, { css } from 'styled-components';

interface StyledButtonProps {
  buttonSize: 'large' | 'medium' | 'small';
  buttonType: 'main' | 'sub' | 'inactive';
}

const buttonSizeStyles = {
  large: css`
    height: 4.8rem;
    padding: 0.04rem 4.65rem;
    ${(props) => props.theme.fonts.subhead2};
    border-radius: 1.2rem;
  `,
  medium: css`
    height: 3.6rem;
    padding: 0.6rem 1.6rem;
    ${(props) => props.theme.fonts.caption1};
    border-radius: 4rem;
  `,
  small: css`
    height: 3.2rem;
    padding: 0.4rem 1.2rem;
    ${(props) => props.theme.fonts.caption2};
    border-radius: 0.8rem;
  `,
};

const buttonTypeStyles = {
  main: css`
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue50};
    cursor: pointer;
  `,
  sub: css`
    color: ${(props) => props.theme.colors.blue60};
    background-color: ${(props) => props.theme.colors.blue20};
    cursor: pointer;
  `,
  inactive: css`
    color: ${(props) => props.theme.colors.blue30};
    background-color: ${(props) => props.theme.colors.blue10};
    cursor: default;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  ${({ buttonSize }) => buttonSizeStyles[buttonSize]};
  ${({ buttonType }) => buttonTypeStyles[buttonType]};
`;
