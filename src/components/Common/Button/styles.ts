import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $buttonSize: 'large' | 'medium' | 'small' | 'small2';
  $buttonType: 'main' | 'sub' | 'inactive' | 'obscure';
}

const buttonSizeStyles = {
  large: css`
    height: 4.8rem;
    padding: 0rem 1.2rem;
    ${(props) => props.theme.fonts.subhead2};
    border-radius: 1.2rem;
    flex: 1 0 0;
  `,
  medium: css`
    height: 3.6rem;
    padding: 0rem 1.6rem;
    ${(props) => props.theme.fonts.caption1};
    border-radius: 4rem;
  `,
  small: css`
    height: 3.2rem;
    padding: 0rem 1.2rem;
    ${(props) => props.theme.fonts.caption2};
    border-radius: 0.8rem;
  `,
  small2: css`
    height: 2.1rem;
    padding: 0.2rem 0.8rem;
    ${(props) => props.theme.fonts.caption4};
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
  obscure: css`
    color: ${(props) => props.theme.colors.gray70};
    background-color: ${(props) => props.theme.colors.gray10};
    box-shadow: inset 0 0 0 0.1rem ${(props) => props.theme.colors.gray20};
    cursor: pointer;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $buttonSize }) => buttonSizeStyles[$buttonSize]};
  ${({ $buttonType }) => buttonTypeStyles[$buttonType]};
`;
