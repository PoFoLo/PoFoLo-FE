import React, { useState } from 'react';
import * as S from '@/components/Common/Input/styles';
import invalidate from '@/assets/webps/Common/invalidate.webp';
import validate from '@/assets/webps/Common/validate.webp';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean; // 에러 변수
  errorMessage?: string; // 에러 발생 시 메시지
  placeholder?: string;
  hideIcon?: boolean; // 아이콘 숨기기 여부
}

const Input = ({
  error = false,
  errorMessage,
  value,
  onChange,
  placeholder = '',
  hideIcon = false,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  // 아이콘 표시 상태 결정
  const showIconState = !hideIcon && (error || (!isFocused && !!value.trim()));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <S.InputContainer>
      <S.StyledInput
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        $error={error}
        placeholder={placeholder}
      />
      {showIconState && <S.IconContainer $backgroundImage={error ? invalidate : validate} />}
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
