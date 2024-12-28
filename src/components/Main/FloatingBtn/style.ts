import styled, { css } from 'styled-components';

export const FloatingBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13.2rem;
  height: 6.2rem;
  padding: 1.6rem 2.4rem;
  border-radius: 6.4rem;
  background: var(--blue, linear-gradient(135deg, #4b7aff 0%, #5c8ef3 100%));
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(css`
      width: 10rem;
      height: 3.6rem;
      padding: 0.7rem 1.5rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 10rem;
      height: 3.6rem;
      padding: 0.7rem 1.5rem;
    `)}
`;

export const FloatingBtnIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 2rem;
      height: 2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 2rem;
      height: 2rem;
    `)}
`;

export const FloatingBtnLetter = styled.span`
  color: #fff;
  ${(props) => props.theme.fonts.subhead2};

  width: 5.2rem;
  height: 3rem;

  ${(props) =>
    props.theme.media.ph(css`
      ${props.theme.fonts.caption2}

      width: 4.2rem;
      height: 2.2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      ${props.theme.fonts.caption2}

      width: 4.2rem;
      height: 2.2rem;
    `)}
`;
