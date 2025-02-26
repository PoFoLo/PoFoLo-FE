import styled, { css } from 'styled-components';
import checked from '@/assets/webps/Common/checked.webp';
import unChecked from '@/assets/webps/Common/unChecked.webp';

export const StyledCheckbox = styled.input`
  appearance: none;
  width: 2rem;
  height: 2rem;
  background-image: url(${unChecked});
  background-size: cover;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.theme.media.pc(css`
      width: 2.4rem;
      height: 2.4rem;
    `)}

  &:checked {
    background-image: url(${checked});
  }

  &:focus {
    outline: none;
  }
`;
