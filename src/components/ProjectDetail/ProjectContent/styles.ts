import styled, { css } from 'styled-components';

export const RightWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  .menu-wrapper {
    display: flex;
    gap: 0.8rem;
  }
`;

export const Title = styled.h2`
  color: black;
  ${(props) => props.theme.fonts.headline4};

  ${(props) =>
    props.theme.media.pc(
      () => `
        ${props.theme.fonts.headline2};
      `
    )}
`;

export const FieldButton = styled.div<{ $majorField: string }>`
  margin: 0.8rem 0 0.4rem;
  width: max-content;
  padding: 0.3rem 0.9rem;
  border-radius: 0.6rem;
  background-color: ${(props) =>
    props.$majorField === '기획'
      ? props.theme.colors.purple10
      : props.$majorField === '디자인'
        ? props.theme.colors.coral10
        : props.theme.colors.green10};

  ${(props) =>
    props.theme.media.pc(css`
      padding: 0.4rem 1.2rem;
      border-radius: 0.8rem;
    `)}

  span {
    color: ${(props) =>
      props.$majorField === '기획'
        ? props.theme.colors.purple50
        : props.$majorField === '디자인'
          ? props.theme.colors.coral50
          : props.theme.colors.green50};
    font-family: 'Pretendard', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.003rem;

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.caption2};
      `
      )}
  }
`;

export const LinkList = styled.div`
  width: 100%;
  margin-top: 1.2rem;
  display: flex;

  .scroll-container {
    display: flex;
  }
`;

export const LinkContainer = styled.a`
  max-width: 25.1rem;
  height: 5.3rem;
  padding: 0.4rem 1.2rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  border: 0.1rem solid ${(props) => props.theme.colors.gray20};
  background-color: ${(props) => props.theme.colors.gray5};
  border-radius: 0.8rem;
  cursor: pointer;

  & + & {
    margin-left: 1.6rem;
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
  }

  ${(props) =>
    props.theme.media.pc(css`
      max-width: 28rem;
      height: 5.6rem;

      & + & {
        margin-left: 2rem;
      }

      img {
        width: 2rem;
        height: 2rem;
      }
    `)}

  .link-title {
    max-width: 20rem;
    color: ${(props) => props.theme.colors.gray90};
    ${(props) => props.theme.fonts.caption3};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.caption2};
      `
      )}
  }

  .web-address {
    max-width: 20rem;
    color: ${(props) => props.theme.colors.gray70};
    ${(props) => props.theme.fonts.caption4};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.caption3};
      `
      )}
  }
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

// 플로팅 버튼

export const FloatingButtonWrapper = styled.div`
  width: 14.8rem;
  height: 6.4rem;
  position: fixed;
  bottom: 4.8rem;
  right: calc(50% - 65.6rem);
  display: flex;
  gap: 2rem;

  @media (max-width: 1440px) {
    right: 5.7rem;
  }

  ${(props) =>
    props.theme.media.ph(css`
      width: 10.8rem;
      height: 4.8rem;
      gap: 1.2rem;
      right: 2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 10.8rem;
      height: 4.8rem;
      gap: 1.2rem;
      right: 2rem;
    `)}

  &.absolute {
    position: absolute;
    bottom: 3.6rem;
    right: 0rem;

    ${(props) =>
      props.theme.media.pc(css`
        bottom: 4.8rem;
      `)}
  }
`;

interface BaseButtonProps {
  $size?: number;
  $activeSize?: number;
}

const BaseButton = styled.div<BaseButtonProps>`
  z-index: 5;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray80};
  border: 0.1rem solid ${(props) => props.theme.colors.gray70};

  ${(props) =>
    props.theme.media.pc(css`
      width: 6.4rem;
      height: 6.4rem;
    `)}

  img {
    width: 2.4rem;
    height: 2.4rem;
    transition:
      width 0.2s,
      height 0.2s;

    ${(props) =>
      props.theme.media.pc(css`
        width: 3.1rem;
        height: 3.1rem;
      `)}
  }

  span {
    margin-top: -0.2rem;
    text-align: center;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: 0.0025rem;
    color: ${(props) => props.theme.colors.gray20};
  }
`;

interface LikeButtonProps {
  $isPC: boolean;
  $isLiked?: boolean;
  $likeCount?: number;
}

export const LikeButton = styled(BaseButton)<LikeButtonProps>`
  img {
    width: ${(props) =>
      props.$isPC ? (!props.$isLiked && (props.$likeCount ?? 0) === 0 ? 3.24 : 3.1) : 2.5}rem;
    height: ${(props) =>
      props.$isPC ? (!props.$isLiked && (props.$likeCount ?? 0) === 0 ? 3.24 : 3.1) : 2.5}rem;
  }

  span {
    display: ${(props) => (props.$isLiked || (props.$likeCount ?? 0) > 0 ? 'block' : 'none')};
  }
`;

interface CommentButtonProps {
  $isPC: boolean;
  $commentCount: number;
}

export const CommentButton = styled(BaseButton)<CommentButtonProps>`
  img {
    width: ${(props) => (props.$isPC ? ((props.$commentCount ?? 0) === 0 ? 3.24 : 3.1) : 2.4)}rem;
    height: ${(props) => (props.$isPC ? ((props.$commentCount ?? 0) === 0 ? 3.24 : 3.1) : 2.4)}rem;
  }

  span {
    display: ${(props) => ((props.$commentCount ?? 0) > 0 ? 'block' : 'none')};
  }
`;
