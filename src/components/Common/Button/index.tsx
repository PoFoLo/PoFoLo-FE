import { ReactNode } from 'react';
import * as S from './style';

type ButtonSize = 'large' | 'medium' | 'small';
type ButtonType = 'main' | 'sub' | 'inactive';

interface ButtonProps {
  size: ButtonSize;
  type: ButtonType;
  onClick?: () => void;
  children: ReactNode;
}

function Button({ size, type, onClick, children }: ButtonProps) {
  return (
    <S.StyledButton buttonSize={size} buttonType={type} onClick={onClick}>
      {children}
    </S.StyledButton>
  );
}

export default Button;
