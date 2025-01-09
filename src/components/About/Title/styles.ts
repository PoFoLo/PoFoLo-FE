import styled, { css } from 'styled-components';

export const TitleSection = styled.div`
  margin-top: 16.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.theme.media.ph(css`
      margin-top: 10.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin-top: 13.6rem;
    `)}
`;

export const PofoloLogo = styled.video`
  object-fit: cover;
  border-radius: 50%;

  ${(props) =>
    props.theme.media.ph(css`
      width: 18rem;
      height: 17.8rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 27rem;
      height: 26.9rem;
    `)}

  ${(props) =>
    props.theme.media.pc(css`
      width: 36rem;
      height: 35.9rem;
    `)}
`;

export const Title = styled.h2`
  margin-top: 2.7rem;
  background: linear-gradient(135deg, #4b7aff, #5c8ef3);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  p {
    text-align: center;
    ${(props) => props.theme.fonts.headingAbout1};

    ${(props) =>
      props.theme.media.ph(
        () => `
        ${props.theme.fonts.headingAbout3};
      `
      )}

    ${(props) =>
      props.theme.media.tab(
        () => `
        ${props.theme.fonts.headingAbout2};
      `
      )}
  }
`;

export const Description = styled.div`
  margin-top: 1.6rem;
  text-align: center;

  ${(props) =>
    props.theme.media.ph(css`
      margin-top: 0.8rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin-top: 0.8rem;
    `)}

  p {
    ${(props) => props.theme.fonts.bodyAbout1};
    color: ${(props) => props.theme.colors.gray90};

    ${(props) =>
      props.theme.media.ph(
        () => `   
        ${props.theme.fonts.bodyAbout3};
      `
      )}

    ${(props) =>
      props.theme.media.tab(
        () => `
        ${props.theme.fonts.bodyAbout2};
      `
      )}
  }
`;
