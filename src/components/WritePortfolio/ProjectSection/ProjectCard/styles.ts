import styled, { css } from 'styled-components';

export const ProjectImage = styled.img`
  height: 11.4rem;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 0.8rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-right: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray20};

  ${(props) =>
    props.theme.media.pc(css`
      width: 31rem;
      height: 17.4rem;
    `)}
`;

export const HoverImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 11.4rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.8rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${(props) =>
    props.theme.media.pc(css`
      height: 17.4rem;
    `)}
`;

export const HoverBtn = styled.button<{ $backgroundImage: string }>`
  width: 4.8rem;
  height: 7.2rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.theme.media.pc(css`
      width: 6.4rem;
      height: 9.6rem;
    `)}
`;

export const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

export const ProjectTitle = styled.p`
  ${(props) => props.theme.fonts.caption3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption1};
  `
    )}
`;

export const LikeCommentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div<{ $backgroundImage: string }>`
  width: 1.8rem;
  height: 1.8rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  flex-shrink: 0;
  margin-right: 0.188rem;
`;

export const CountText = styled.p`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.gray60};
  margin-right: 0.375rem;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(11.4rem * (16 / 9));
  position: relative;
  cursor: pointer;

  &:hover ${HoverImageContainer} {
    opacity: 1;
  }

  &:hover ${ProjectInfoContainer} {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }

  ${(props) =>
    props.theme.media.pc(css`
      width: 31rem;
    `)}
`;
