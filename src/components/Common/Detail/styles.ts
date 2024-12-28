import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 131.2rem;
  padding-bottom: 13.2rem;
  position: relative;

  @media (max-width: 1440px) {
    padding-bottom: 13.2rem;

    ${(props) =>
      props.theme.media.pc(css`
        margin: 0 6.4rem;
        width: calc(100% - 11.2rem);
      `)}

    ${(props) =>
      props.theme.media.tab(css`
        margin: 0 2rem;
        width: calc(100% - 4rem);
      `)}

    ${(props) =>
      props.theme.media.ph(css`
        margin: 0 2rem;
        width: calc(100% - 4rem);
      `)}
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
  overflow: hidden;
  width: 64rem;
  height: 36rem;
  border-radius: 1.2rem;
  margin-right: 2rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:first-child {
    margin-left: calc((100vw - 131.2rem) / 2 - 0.7rem);

    @media (max-width: 1440px) {
      margin-left: 5.7rem; // 스크롤 바 이슈로 6.4 - 0.7
    }
  }

  ${(props) =>
    props.theme.media.tab(css`
      width: 32rem;
      height: 18rem;
      border-radius: 0.6rem;
      margin-right: 1.6rem;
      &:first-child {
        margin-left: 2rem;
      }
    `)}

  ${(props) =>
    props.theme.media.ph(css`
      width: 32rem;
      height: 18rem;
      border-radius: 0.6rem;
      margin-right: 1.6rem;
      &:first-child {
        margin-left: 2rem;
      }
    `)}
`;

export const TopInfo = styled.section`
  margin-top: 2.4rem;
  height: 3.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.theme.media.pc(css`
      margin-top: 3.2rem;
      height: 4.8rem;
    `)}
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.2rem;

  img {
    width: 3.6rem;
    height: 3.6rem;
    border: 0.15rem solid ${(props) => props.theme.colors.gray20};
    border-radius: 50%;
    cursor: pointer;

    ${(props) =>
      props.theme.media.pc(css`
        width: 4.8rem;
        height: 4.8rem;
      `)}
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .nickname {
    color: ${(props) => props.theme.colors.gray90};
    ${(props) => props.theme.fonts.caption3};
    cursor: pointer;

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.subhead3};
      `
      )}
  }

  .school {
    color: ${(props) => props.theme.colors.gray70};
    ${(props) => props.theme.fonts.caption4};

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.caption3};
      `
      )}
  }
`;

export const Date = styled.span`
  color: ${(props) => props.theme.colors.gray60};
  ${(props) => props.theme.fonts.caption4};

  ${(props) =>
    props.theme.media.pc(
      () => `
      ${props.theme.fonts.caption2};
      `
    )}
`;

export const BodyText = styled.section`
  padding: 0 0.4rem;
  margin-top: 1.6rem;
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Article = styled.article`
  margin-top: 2.4rem;

  ${(props) =>
    props.theme.media.pc(css`
      margin-top: 3.2rem;
    `)}

  h2 {
    color: black;
    ${(props) => props.theme.fonts.subhead3};
    margin-bottom: 0.8rem;

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.subhead1};
      `
      )}
  }
  span {
    color: #404040;
    ${(props) => props.theme.fonts.body4};
    white-space: pre-wrap;

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.body2};
      `
      )}
  }
  li {
    padding-left: 1rem;
    list-style: inside;
    color: #404040;
    ${(props) => props.theme.fonts.body4};
    white-space: pre-wrap;

    ${(props) =>
      props.theme.media.pc(
        () => `
      ${props.theme.fonts.body2};
      `
      )}
  }
`;
