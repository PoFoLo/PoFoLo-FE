import styled, { css } from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 6.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(60px);

  position: fixed;
  z-index: 20;

  ${(props) =>
    props.theme.media.ph(css`
      margin-top: 1.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      max-width: 79.4rem;
      height: 56px;
      padding: 14px 20px;
      flex-direction: column;
      align-items: center;
      gap: 939px;
    `)}
`;

export const NavbarBody = styled.div`
  width: 100%;
  max-width: 131.2rem;
  height: 4.2rem;
  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.theme.media.ph(css`
      margin-top: 1.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      max-width: 79.4rem;
      height: 56px;
      padding: 14px 20px;
      flex-direction: column;
      align-items: center;
      gap: 939px;
    `)}
`;

export const NavbarLeftGoBackButton = styled.img`
  width: 1.45rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const NavbarLeftLogo = styled.img`
  width: 11.1rem;
  height: 2.675rem;
  cursor: pointer;
`;

export const NavbarRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarPageButton = styled.span<{ width: number }>`
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.subhead2};
  width: ${({ width }) => width}rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3.2rem;
`;

export const NavbarLoginButton = styled.button`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.subhead3};
  display: flex;
  height: 3.2rem;
  padding: 0.2rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: 0.075rem solid var(--Gray-20, #e4e4e6);
  background-color: white;
  cursor: pointer;
  width: 6.2rem;
  margin-left: 3.2rem;
`;

export const NavbarMyPageButton = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 4.8rem;
  border: 0.15rem solid ${(props) => props.theme.colors.gray20};

  margin-left: 3.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavbarMyPageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavbarLogoutButtonContainer = styled.button`
  display: flex;
  width: 10rem;
  height: 3.2rem;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 0.8rem;
  border: 0.075rem solid ${(props) => props.theme.colors.gray20};
  background-color: ${(props) => props.theme.colors.gray05};
  cursor: pointer;
  margin-left: 3.2rem;
`;

export const NavbarLogoutButtonLetter = styled.span`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fonts.caption2};
  width: 5.6rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarLogoutButtonIcon = styled.img`
  width: 1.5rem;
  height: 1.4rem;
  flex-shrink: 0;
`;
