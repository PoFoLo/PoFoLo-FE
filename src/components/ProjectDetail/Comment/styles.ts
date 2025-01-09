import styled, { css } from 'styled-components';

export const CommentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray5};
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray20};
`;

export const CommentContainer = styled.section`
  width: 100%;
  max-width: 131.2rem;
  padding: 3.2rem 0;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  ${(props) =>
    props.theme.media.ph(css`
      padding: 1.6rem 0;
      margin: 0 2rem;
      width: calc(100% - 4rem);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      padding: 1.6rem 0;
      margin: 0 2rem;
      width: calc(100% - 4rem);
    `)}
`;

export const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 3.6rem;

  h2 {
    color: ${(props) => props.theme.colors.gray90};
    ${(props) => props.theme.fonts.subhead2};

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.headline3};
      `
      )}
  }
  span {
    color: ${(props) => props.theme.colors.gray60};
    ${(props) => props.theme.fonts.subhead2};

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.subhead1};
      `
      )}
  }
`;

export const AddComment = styled.div`
  display: flex;
  gap: 1.2rem;
  ${(props) =>
    props.theme.media.pc(css`
      gap: 2rem;
    `)}
  img {
    width: 3rem;
    height: 3rem;
    border: 0.15rem solid ${(props) => props.theme.colors.gray20};
    border-radius: 50%;
    object-fit: cover;
    ${(props) =>
      props.theme.media.pc(css`
        width: 4rem;
        height: 4rem;
      `)}
  }
`;

export const CommentBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray10};
  outline: none;
  resize: none;
  border: 0.15rem solid ${(props) => props.theme.colors.gray20};
  border-radius: 1.2rem;
  padding: 0.8rem 8.8rem 0.8rem 1.2rem;
  height: 4.1rem;
  overflow: hidden;
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => props.theme.colors.gray90};

  ${(props) =>
    props.theme.media.pc(css`
      padding: 1.2rem 8.8rem 1.2rem 2rem;
      height: 5.3rem;
    `)}

  ${(props) =>
    props.theme.media.pc(
      () => `
      ${props.theme.fonts.body2};
    `
    )}

  &::placeholder {
    color: ${(props) => props.theme.colors.gray50};
  }

  &:focus {
    border: 0.15rem solid ${(props) => props.theme.colors.blue40};
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 1.2rem;
`;

export const CommentList = styled.ul`
  width: 100%;
  margin-top: 0.4rem;
`;

export const CommentItem = styled.li`
  padding: 3.2rem 0;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray20};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const CommentItemWrapper = styled.div`
  display: flex;
  gap: 1.2rem;

  ${(props) =>
    props.theme.media.pc(css`
      gap: 2rem;
    `)}

  .profile-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 0.15rem solid ${(props) => props.theme.colors.gray20};
    cursor: pointer;
    object-fit: cover;

    ${(props) =>
      props.theme.media.pc(css`
        width: 4rem;
        height: 4rem;
      `)}
  }
`;

export const CommentContentWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .comment-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .menu-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
  }

  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    ${(props) =>
      props.theme.media.pc(css`
        width: 2.8rem;
        height: 2.8rem;
      `)}
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  ${(props) =>
    props.theme.media.pc(css`
      gap: 1.2rem;
    `)}

  p {
    ${(props) => props.theme.fonts.subhead3};
    color: ${(props) => props.theme.colors.gray90};
    cursor: pointer;

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.subhead2};
      `
      )}
  }

  span {
    ${(props) => props.theme.fonts.caption3};
    color: ${(props) => props.theme.colors.gray60};

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.caption2};
      `
      )}
  }
`;

export const CommentContent = styled.p`
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => props.theme.colors.gray90};
  white-space: pre-wrap;

  ${(props) =>
    props.theme.media.pc(
      () => `
      ${props.theme.fonts.body2};
    `
    )}
`;

// reply

export const ReplySection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReplyWrapper = styled.div`
  margin-top: 0.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .comment-info-wrapper {
    margin-left: 0.6rem;
    display: flex;
    gap: 0.4rem;
  }

  .reply-line {
    width: 3.2rem;
    height: 3.2rem;

    ${(props) =>
      props.theme.media.pc(css`
        width: 5rem;
        height: 5rem;
      `)}
  }

  .reply-info-wrapper {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

export const AddReply = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 11.6rem 0 10.4rem;

  img {
    width: 10rem;
    height: 10rem;
    ${(props) =>
      props.theme.media.pc(css`
        width: 16rem;
        height: 16rem;
      `)}
  }

  span {
    ${(props) => props.theme.fonts.headline4};
    color: ${(props) => props.theme.colors.gray30};
    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.headline3};
      `
      )}
  }
`;
