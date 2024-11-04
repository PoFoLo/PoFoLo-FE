import React, { useState, useEffect } from 'react';
import * as S from '@/components/Common/Input/styles';
import Invalidate from '@/assets/webps/WriteProject/invalidate.webp';
import Validate from '@/assets/webps/WriteProject/validate.webp';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean; // 에러 변수
  errorMessage?: string; // 에러 발생 시 메시지
  placeholder?: string;
}

const Input = ({
  error = false,
  errorMessage,
  value,
  onChange,
  placeholder = '',
}: InputFieldProps) => {
  const [showIconState, setShowIconState] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    // input에 값이 있거나 에러 발생 시에만 아이콘 표시, 단 포커스 중에는 아이콘 숨김
    setShowIconState(error || (!isFocused && !!value.trim()));
  }, [value, error, isFocused]);

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
      {showIconState && <S.IconContainer $backgroundImage={error ? Invalidate : Validate} />}
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
