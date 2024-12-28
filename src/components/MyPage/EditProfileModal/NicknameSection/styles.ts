import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;
export const DuplicationBtn = styled.div`
  position: absolute;
  top: 1.15rem;
  right: 1.2rem;

  ${(props) =>
    props.theme.media.tab(css`
      top: 0.6rem;
      right: 1.2rem;
    `)}
`;

export * from '@/components/MyPage/EditProfileModal/styles';
