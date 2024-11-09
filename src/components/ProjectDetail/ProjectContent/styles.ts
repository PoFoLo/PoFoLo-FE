import styled from 'styled-components';

export const ProjectContainer = styled.main`
  width: 100%;
  max-width: 131.2rem;
  padding-bottom: 11.2rem;
  position: relative;

  @media (max-width: 1440px) {
    padding: 0 6.4rem 11.2rem;
  }
`;

export const ImgContainer = styled.section`
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  white-space: nowrap;
`;

export const ImageItem = styled.img`
  width: 64rem;
  height: 36rem;
  border-radius: 1.2rem;
  display: inline-block;
  & + & {
    margin-left: 2rem;
  }
`;

export const TopInfo = styled.section`
  margin-top: 3.2rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.2rem;

  img {
    width: 4.8rem;
    height: 4.8rem;
    border: 0.15rem solid ${(props) => props.theme.colors.gray20};
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .nickname {
    color: ${(props) => props.theme.colors.gray90};
    ${(props) => props.theme.fonts.subhead3};
    cursor: pointer;
  }

  .school {
    color: ${(props) => props.theme.colors.gray70};
    ${(props) => props.theme.fonts.caption3};
  }
`;

export const Date = styled.span`
  color: ${(props) => props.theme.colors.gray60};
  ${(props) => props.theme.fonts.caption2};
`;

export const BodyText = styled.section`
  padding: 0 0.4rem;
`;

export const Title = styled.h2`
  margin-top: 1.6rem;
  color: black;
  ${(props) => props.theme.fonts.headline2};
`;

export const FieldButton = styled.div`
  margin: 0.8rem 0 0.4rem;
  width: max-content;
  padding: 0.4rem 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.green10};

  span {
    color: ${(props) => props.theme.colors.green50};
    ${(props) => props.theme.fonts.caption2};
  }
`;

export const Article = styled.article`
  margin-top: 3.2rem;

  h2 {
    color: black;
    ${(props) => props.theme.fonts.subhead1};
    margin-bottom: 0.8rem;
  }
  span {
    color: #404040;
    ${(props) => props.theme.fonts.body2};
    white-space: pre-wrap;
  }
`;

export const LinkList = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const LinkContainer = styled.div`
  margin-top: 1.2rem;
  width: 28rem;
  height: 5.6rem;
  padding: 0.4rem 1.2rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  border: 0.1rem solid ${(props) => props.theme.colors.gray20};
  background-color: ${(props) => props.theme.colors.gray5};
  border-radius: 0.8rem;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }

  .link-title {
    width: 20rem;
    color: ${(props) => props.theme.colors.gray90};
    ${(props) => props.theme.fonts.caption2};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .web-address {
    width: 20rem;
    color: ${(props) => props.theme.colors.gray70};
    ${(props) => props.theme.fonts.caption3};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FloatingButtonWrapper = styled.div`
  width: 14.8rem;
  height: 6.4rem;
  position: fixed;
  bottom: 4.8rem;
  right: calc(50% - 65.6rem);
  display: flex;
  gap: 2rem;

  @media (max-width: 1440px) {
    right: calc(50% - 65.6rem + 6.4rem);
  }

  @media (max-width: 1312px) {
    right: 6.4rem;
  }

  &.absolute {
    position: absolute;
    bottom: 4.8rem;
  }
`;

export const FloatingButton = styled.div`
  cursor: pointer;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray80};
  border: 0.1rem solid ${(props) => props.theme.colors.gray70};
`;
