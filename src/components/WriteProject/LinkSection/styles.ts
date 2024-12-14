import styled, { css } from 'styled-components';

export const LinkInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.8rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.gray10};
  gap: 1.2rem 1.8rem;
  width: 100%;
  min-width: 0;
  min-height: 4.4rem;

  ${(props) =>
    props.theme.media.pc(css`
      padding: 1.4rem;
    `)}
`;

export const Link = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.gray5};
  border: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-radius: 0.8rem;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  max-width: 25.1rem;
  min-width: 0;

  ${(props) =>
    props.theme.media.pc(css`
      max-width: 28rem;
    `)}
`;

export const LinkIcon = styled.div<{ $backgroundImage: string }>`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  flex-shrink: 0;

  ${(props) =>
    props.theme.media.pc(css`
      width: 2rem;
      height: 2rem;
    `)}
`;

export const LinkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  justify-content: center;
  min-width: 0;
`;

export const LinkTitle = styled.p`
  ${(props) => props.theme.fonts.caption3};
  color: ${(props) => props.theme.colors.gray90};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption2};
  `
    )}
`;

export const LinkDomain = styled.p`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.gray70};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption3};
  `
    )}
`;

export const RemoveButton = styled.button<{ $backgroundImage: string }>`
  width: 1.2rem;
  height: 1.2rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  flex-shrink: 0;
`;

export const Input = styled.input`
  ${(props) => props.theme.fonts.body4};
  flex-grow: 1;
  border: none;
  outline: none;
  background: transparent;
  min-width: 0;
  margin: 0.35rem 0.4rem;
  padding: 0rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray50};
  }

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.body2};
  `
    )}

  ${(props) =>
    props.theme.media.pc(css`
      margin: 0rem;
    `)}
`;

export * from '@/components/FormField/styles';
