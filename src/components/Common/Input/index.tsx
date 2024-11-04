import React, { useState, useEffect } from 'react';
import * as S from '@/components/Common/Input/styles';
import Invalidate from '@/assets/webps/WriteProject/invalidate.webp';
import Validate from '@/assets/webps/WriteProject/validate.webp';

// Input 컴포넌트 (한 줄 입력)
interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean; // 에러 검사 여부
  errorMessage?: string; // 에러 발생 시 메시지
  placeholder?: string;
  showIcon?: boolean; // 오른쪽에 ✅,❌ 아이콘 표시 여부
}

const Input = ({
  error = false,
  errorMessage,
  value,
  onChange,
  placeholder = '',
  showIcon = true,
}: InputFieldProps) => {
  const [showIconState, setShowIconState] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  useEffect(() => {
    // input에 값이 있거나 에러 발생 시에만 아이콘 표시
    setShowIconState(!!value.trim() || error);
  }, [value, error]);

  return (
    <S.InputContainer>
      <S.StyledInput
        value={value}
        onChange={handleInputChange}
        $error={error}
        $showIcon={showIcon}
        placeholder={placeholder}
      />
      {showIcon && showIconState && (
        <S.IconContainer $backgroundImage={error ? Invalidate : Validate} />
      )}
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
