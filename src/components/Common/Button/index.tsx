import { ReactNode } from 'react';
import * as S from '@/components/Common/Button/styles';

type ButtonSize = 'large' | 'medium' | 'small' | 'small2';
type ButtonType = 'main' | 'sub' | 'inactive' | 'obscure';

interface ButtonProps {
  size: ButtonSize;
  type: ButtonType;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}

const Button = ({ size, type, onClick, children, disabled = false }: ButtonProps) => {
  return (
    <S.StyledButton
      $buttonSize={size}
      $buttonType={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
