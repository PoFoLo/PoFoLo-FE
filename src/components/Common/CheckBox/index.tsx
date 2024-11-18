import * as S from '@/components/Common/CheckBox/styles';

interface CheckboxProps {
  id?: string;
  checked: boolean;
  onChange?: () => void;
}

const Checkbox = ({ id, checked, onChange }: CheckboxProps) => {
  return <S.StyledCheckbox type="checkbox" id={id} checked={checked} onChange={onChange} />;
};

export default Checkbox;
