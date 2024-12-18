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
  setHideIcon?: (value: boolean) => void;
  isDuplicated?: boolean;
  isDuplicateChecked?: boolean;
  isPrivateCheckbox?: boolean;
}

const Input = ({
  error = false,
  errorMessage,
  value,
  onChange,
  placeholder = '',
  hideIcon = false,
  setHideIcon,
  isDuplicated = false,
  isDuplicateChecked = false,
  isPrivateCheckbox = false,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  // 아이콘 표시 상태 결정
  const showIconState =
    !hideIcon && isDuplicateChecked && (error || (!isFocused && !!value.trim()));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setHideIcon?.(false); // 포커스 시 아이콘 표시
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!isDuplicated) {
      setHideIcon?.(true); // 중복 확인 상태가 없으면 아이콘 숨김
    }
  };

  return (
    <S.InputContainer>
      <S.StyledInput
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        $error={error}
        placeholder={placeholder}
        $isDuplicated={isDuplicated}
        $isPrivateCheckbox={isPrivateCheckbox}
      />
      {showIconState && <S.IconContainer $backgroundImage={error ? invalidate : validate} />}
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
