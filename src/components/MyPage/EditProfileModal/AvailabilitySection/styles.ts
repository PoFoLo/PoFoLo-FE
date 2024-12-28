import styled, { css } from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;

  ${(props) =>
    props.theme.media.ph(css`
      flex-direction: column;
      gap: 1.6rem;
    `)}

  ${(props) =>
    props.theme.media.pc(css`
      gap: 1.6rem 8rem;
    `)}
`;

export const AvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 0rem;
  margin-bottom: 2.45rem;
  ${(props) =>
    props.theme.media.pc(css`
      margin-top: 1.4rem;
      margin-bottom: 0rem;
    `)}

  ${(props) =>
    props.theme.media.pc(css`
      gap: 3.2rem;
    `)}
`;

export const LabelText = styled.label`
  ${(props) => props.theme.fonts.subhead4};
  color: ${(props) => props.theme.colors.gray90};
  display: flex;
  gap: 1.2rem;
  align-items: center;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption1};
  `
    )}
`;

export const GreyLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #e4e4e6;
`;

export * from '@/components/MyPage/EditProfileModal/styles';
