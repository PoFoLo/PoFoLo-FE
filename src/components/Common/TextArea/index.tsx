import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as S from '@/components/Common/TextArea/styles';
import Invalidate from '@/assets/webps/WriteProject/invalidate.webp';
import Validate from '@/assets/webps/WriteProject/validate.webp';

// Textarea 컴포넌트 (여러 줄 입력)
interface TextAreaFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean; // 에러 변수
  errorMessage?: string; // 에러 발생 시 메시지
  rows?: number;
  placeholder?: string;
}

const TextArea = ({
  error = false,
  errorMessage,
  value,
  onChange,
  rows = 1,
  placeholder = '',
}: TextAreaFieldProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // 아이콘 표시 상태 결정
  const showIconState = error || (!isFocused && !!value.trim());

  // textarea 높이 조절 함수
  const adjustHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  // 글자 수에 맞춰서 textarea 높이 조절
  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  // 윈도우 사이즈에 맞춰서 textarea 높이 조절
  useEffect(() => {
    window.addEventListener('resize', adjustHeight);
    return () => window.removeEventListener('resize', adjustHeight);
  }, [adjustHeight]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <S.TextAreaContainer>
      <S.StyledTextArea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={rows}
        $error={error}
        placeholder={placeholder}
      />
      {showIconState && <S.IconContainer $backgroundImage={error ? Invalidate : Validate} />}
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.TextAreaContainer>
  );
};

export default TextArea;
