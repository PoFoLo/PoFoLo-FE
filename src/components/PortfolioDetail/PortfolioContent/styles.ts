import styled from 'styled-components';

export const PortfolioContainer = styled.main`
  width: 100%;
  max-width: 131.2rem;
  padding-bottom: 13.2rem;
  position: relative;

  @media (max-width: 1440px) {
    padding-bottom: 13.2rem;
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }
`;

export const ImgContainer = styled.section`
  width: 100%;
  margin-top: 8.8rem;
  display: flex;
  white-space: nowrap;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 64rem;
  height: 36rem;
  border-radius: 1.2rem;
  overflow: hidden;
  margin-right: 2rem;
  cursor: pointer;

  &:first-child {
    margin-left: calc((100vw - 131.2rem) / 2 - 0.7rem);

    @media (max-width: 1440px) {
      margin-left: 5.7rem; // 스크롤 바 이슈로 6.4 - 0.7
    }
  }
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 1.2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover {
    opacity: 1;
  }
`;

export const OverlayText = styled.div`
  .writer {
    ${(props) => props.theme.fonts.caption3};
    color: ${(props) => props.theme.colors.gray40};
  }

  .title {
    ${(props) => props.theme.fonts.subhead2};
    color: ${(props) => props.theme.colors.gray5};
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

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .button {
    display: flex;
    gap: 0.8rem;
  }
`;

export const Date = styled.span`
  color: ${(props) => props.theme.colors.gray60};
  ${(props) => props.theme.fonts.caption2};
`;

export const BodyText = styled.section`
  padding: 0 0.4rem;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1.6rem;
`;

export const Title = styled.h2`
  color: black;
  ${(props) => props.theme.fonts.headline1};
`;

export const Link = styled.div<{ isCopied: boolean }>`
  width: 12.5rem;
  height: 3.6rem;
  box-shadow: inset 0 0 0 0.1rem
    ${(props) => (props.isCopied ? props.theme.colors.blue60 : props.theme.colors.gray20)};
  border-radius: 3.6rem;
  background-color: ${(props) => props.theme.colors.gray5};
  padding: 0.4rem 1.6rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition:
    box-shadow 0.3s ease,
    color 0.3s ease;

  img {
    width: 1.6rem;
    height: 1.6rem;
  }

  span {
    margin-left: ${(props) => (props.isCopied ? '2rem' : '1rem')};
    ${(props) => props.theme.fonts.caption1};
    color: ${(props) => (props.isCopied ? props.theme.colors.blue60 : props.theme.colors.gray80)};
    transition: color 0.3s ease;
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
  li {
    padding-left: 1rem;
    list-style: inside;
    color: #404040;
    ${(props) => props.theme.fonts.body2};
    white-space: pre-wrap;
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
