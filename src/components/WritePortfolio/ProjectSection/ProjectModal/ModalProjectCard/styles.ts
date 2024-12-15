import styled, { css } from 'styled-components';

export const ProjectCard = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.theme.media.pc(css`
      flex-direction: column;
      width: 100%;
    `)}
`;

export const CheckboxContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 1.1rem;
  left: 1.1rem;

  ${(props) =>
    props.theme.media.pc(css`
      top: 1.2rem;
      right: 1.2rem;
      left: auto;
    `)}
`;

export const ProjectImage = styled.img`
  width: 12rem;
  min-width: 12rem;
  height: 9rem;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 1.2rem 0rem 0rem 1.2rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray20};

  ${(props) =>
    props.theme.media.pc(css`
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      border-radius: 1.2rem 1.2rem 0rem 0rem;
      border-top: 0.1rem solid ${(props) => props.theme.colors.gray20};
      border-right: 0.1rem solid ${(props) => props.theme.colors.gray20};
      border-left: 0.1rem solid ${(props) => props.theme.colors.gray20};
    `)}
`;

export const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 9rem;
  padding: 1rem 1.2rem;
  border-radius: 0rem 1.2rem 1.2rem 0rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-right: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray20};

  ${(props) =>
    props.theme.media.pc(css`
      height: 6.6rem;
      padding: 0.8rem 1.2rem 1rem 1.2rem;
      border-radius: 0rem 0rem 1.2rem 1.2rem;
      border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray20};
      border-right: 0.1rem solid ${(props) => props.theme.colors.gray20};
      border-left: 0.1rem solid ${(props) => props.theme.colors.gray20};
    `)}
`;

export const ProjectTitle = styled.p`
  ${(props) => props.theme.fonts.caption2};
  margin-left: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${(props) =>
    props.theme.media.pc(css`
      display: block;
      -webkit-line-clamp: unset;
      -webkit-box-orient: unset;
      white-space: nowrap;
    `)}
`;

export * from '@/components/WritePortfolio/ProjectSection/ProjectCard/styles';
