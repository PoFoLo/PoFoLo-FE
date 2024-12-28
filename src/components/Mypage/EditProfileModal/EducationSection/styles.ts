import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
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
  top: 1rem;
  right: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      top: 1.3em;
      right: 1.8rem;
    `)}
`;

export * from '@/components/Mypage/EditProfileModal/styles';
