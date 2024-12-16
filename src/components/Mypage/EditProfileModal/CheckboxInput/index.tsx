import * as S from '@/components/Mypage/EditProfileModal/CheckboxInput/styles';
import Checkbox from '@/components/Common/CheckBox';

interface CheckboxInputProps {
  inputValue: string;
  isChecked: boolean;
  inputPlaceholder?: string;
  onInputChange: (value: string) => void;
  onCheckboxChange: (checked: boolean) => void;
  error?: boolean;
}

const CheckboxInput = ({
  inputValue,
  isChecked,
  inputPlaceholder = '',
  onInputChange,
  onCheckboxChange,
  error = false,
}: CheckboxInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };
  const handleCheckboxChange = () => {
    onCheckboxChange(!isChecked);
  };
  return (
    <S.InputContainer>
      <S.StyledInput
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={handleInputChange}
        $error={error}
      />
      <S.CheckboxContainer>
        <S.CheckboxLabel>
          <Checkbox checked={!isChecked} onChange={handleCheckboxChange} />
          비공개
        </S.CheckboxLabel>
      </S.CheckboxContainer>
    </S.InputContainer>
  );
};

export default CheckboxInput;
