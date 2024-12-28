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

export const InputWrapper = styled.div`
  position: relative;
  min-width: 0;
  width: 100%;
`;

export const CheckboxLabel = styled.label`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.gray60};
  display: flex;
  gap: 0.8rem;
  align-items: center;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption2};
  `
    )}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0.9rem;
  right: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      top: 1.3em;
      right: 1.8rem;
    `)}
`;

export * from '@/components/Mypage/EditProfileModal/styles';
