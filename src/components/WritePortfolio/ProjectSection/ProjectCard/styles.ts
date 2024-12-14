import styled from 'styled-components';

export const ProjectImage = styled.img`
  width: 31rem;
  height: 17.4rem;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 1.2rem 1.2rem 0rem 0rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-right: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray20};
`;

export const HoverImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 17.4rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1.2rem 1.2rem 0rem 0rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const HoverBtn = styled.button<{ $backgroundImage: string }>`
  width: 6.4rem;
  height: 9.6rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6.6rem;
  padding: 0.8rem 1.2rem 1rem 1.2rem;
  border-radius: 0rem 0rem 1.2rem 1.2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-right: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray20};
`;

export const ProjectTitle = styled.p`
  ${(props) => props.theme.fonts.caption2};
  margin-left: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  width: 31rem;
  position: relative;
  cursor: pointer;

  &:hover ${HoverImageContainer} {
    opacity: 1;
  }

  &:hover ${ProjectInfoContainer} {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
`;
