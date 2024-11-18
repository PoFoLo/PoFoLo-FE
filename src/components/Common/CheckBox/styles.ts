import styled from 'styled-components';
import CheckmarkIcon from '@/assets/webps/Common/checked.webp';
import unCheckmarkIcon from '@/assets/webps/Common/unChecked.webp';

export const StyledCheckbox = styled.input`
  appearance: none;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${unCheckmarkIcon});
  background-size: cover;
  border: none;
  cursor: pointer;

  &:checked {
    background-image: url(${CheckmarkIcon});
  }

  &:focus {
    outline: none;
  }
`;
