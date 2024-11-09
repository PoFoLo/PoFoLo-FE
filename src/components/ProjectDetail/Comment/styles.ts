import styled from 'styled-components';

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
    padding: 3.2rem 6.4rem;
  }
`;

export const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 3.6rem;

  h2 {
    color: ${(props) => props.theme.colors.gray90};
    ${(props) => props.theme.fonts.headline3};
  }
  span {
    color: ${(props) => props.theme.colors.gray60};
    ${(props) => props.theme.fonts.subhead1};
  }
`;

export const AddComment = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 4rem;
    height: 4rem;
    border: 0.15rem solid ${(props) => props.theme.colors.gray20};
    border-radius: 50%;
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
  padding: 1.2rem 8.8rem 1.2rem 2rem;
  height: 5.6rem;
  overflow: hidden;
  ${(props) => props.theme.fonts.body2};
  color: ${(props) => props.theme.colors.gray90};

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
  display: flex;
  gap: 2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray20};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.15rem solid ${(props) => props.theme.colors.gray20};
  }
`;

export const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  p {
    ${(props) => props.theme.fonts.subhead2};
    color: ${(props) => props.theme.colors.gray90};
  }

  span {
    ${(props) => props.theme.fonts.caption2};
    color: ${(props) => props.theme.colors.gray60};
  }
`;

export const CommentContent = styled.p`
  ${(props) => props.theme.fonts.body2};
  color: ${(props) => props.theme.colors.gray90};
  white-space: pre-wrap;
`;
