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
      height: 5.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 5.6rem;
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
      height: 2.8rem;
      margin: 0 2rem;
      width: calc(100% - 4rem);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 2.8rem;
      margin: 0 2rem;
      width: calc(100% - 4rem);
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

export const NavbarLeftLogoTabletMobile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  object-fit: contain; /* 이미지를 잘라내지 않고 크기에 맞춤 */
  flex-grow: 0; /* 부모 flex 컨테이너가 크기를 줄이지 못하도록 설정 */
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
  justify-content: center;
  align-items: center;
  height: 3.05rem;
  padding: 0.2rem 1rem;
  border-radius: 0.8rem;
  border: 0.075rem solid ${(props) => props.theme.colors.gray20};
  background-color: white;
  margin-left: 3.2rem;
  cursor: pointer;
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

  ${(props) =>
    props.theme.media.ph(css`
      height: 2.4rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 2.4rem;
    `)}
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

export const NavbarRightContainerTabletMobile = styled.div`
  height: 2.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
`;

export const NavbarHamburgerButtonTabletMobile = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;

export const NavbarDetailContainerTabletMobile = styled.div<{ isExtended: boolean }>`
  width: 100%;
  height: ${(props) => (props.isExtended ? '13.4rem' : '9.6rem')};

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(60px);

  position: fixed;
  z-index: 20;
  margin-top: 5.6rem;
`;

export const NavbarDetailBodyTabletMobile = styled.div`
  width: 100%;
  max-width: 79.4rem;
  height: 6rem;
  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;

  ${(props) =>
    props.theme.media.ph(css`
      max-width: 32rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      max-width: 79.4rem;
    `)}
`;

export const NavbarDetailPageButtonContainerTabletMobile = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
`;

export const NavbarDetailPageButtonTabletMobile = styled.div`
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.subhead3};

  height: 2.4rem;
  cursor: pointer;
`;
