import styled, { css } from 'styled-components';

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  min-width: 0rem;

  ${(props) =>
    props.theme.media.pc(css`
      flex-direction: row;
    `)}
`;

export * from '@/components/MyPage/EditProfileModal/styles';
