import styled, { css } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const ProfileLayout = styled.div`
  width: 100%;
  max-width: 131.2rem;
  background-color: #fff;
  position: relative;

  @media (max-width: 1440px) {
    margin: 12.8rem 6.4rem 1.8rem 6.4rem;
    width: calc(100% - 12.8rem); // 얘는 11.2로 하니까 이상해지네. 원래대로 12.8이 옳네.
  }

  margin: 12.8rem 0 1.8rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${(props) =>
    props.theme.media.ph(css`
      margin: 8rem 2rem 1.8rem 2rem;
      width: calc(100% - 4rem);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin: 8rem 2rem 1.8rem 2rem;
      width: calc(100% - 4rem);
    `)}
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  width: 100%;

  ${(props) =>
    props.theme.media.ph(css`
      gap: 1.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      gap: 1.6rem;
    `)}
`;

export const ProfilePic = styled.img`
  width: 14.4rem;
  height: 14.4rem;
  border-radius: 1.2rem;
  object-fit: cover;

  ${(props) =>
    props.theme.media.ph(css`
      width: 9.2rem;
      height: 9.2rem;
      min-width: 9.2rem;
      min-height: 9.2rem;
      margin-left: 1.6rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 11.2rem;
      height: 11.2rem;
    `)}
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;

export const NameAndBadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  height: 4.2rem;

  ${(props) =>
    props.theme.media.tab(css`
      height: 2.4rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      height: 3.1rem;
    `)}
`;

export const NameContainerMobile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.1rem;
`;

export const Name = styled.div`
  color: #000;
  ${(props) => props.theme.fonts.subhead1}

  ${(props) =>
    props.theme.media.ph(
      () => `
      font-family: 'Pretendard';
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 3.12rem */
      letter-spacing: 0.012remF;
  `
    )}

  ${(props) =>
    props.theme.media.tab(
      () => `
      font-family: 'Pretendard';
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 3.12rem */
      letter-spacing: 0.012rem;
  `
    )}
`;

export const BadgesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  width: 19.2rem;
  height: 3.2rem;

  ${(props) =>
    props.theme.media.ph(css`
      gap: 0.6rem;
      width: 21.2rem;
      height: 2.4rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      gap: 0.8rem;
      width: 21.2rem;
      height: 2.4rem;
    `)}
`;

export const OfferBtnContainer = styled.button<{ $isAvailable: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1.6rem;
  gap: 0.6rem;
  border-radius: 3.2rem;
  background: ${(props) =>
    props.$isAvailable ? props.theme.colors.blue50 : props.theme.colors.gray20};
  height: 3.2rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  ${(props) =>
    props.theme.media.ph(css`
      gap: 0.45rem;
      border-radius: 2.4rem;
      height: 2.4rem;
      padding: 0.3rem 1.2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      gap: 0.45rem;
      border-radius: 2.4rem;
      height: 2.4rem;
      padding: 0.3rem 1.2rem;
    `)}
`;

export const OfferBtnIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 1.05rem;
      height: 1.05rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 1.05rem;
      height: 1.05rem;
    `)}
`;

export const OfferBtnLetter = styled.div<{ $isAvailable: boolean }>`
  color: ${(props) => (props.$isAvailable ? props.theme.colors.white : props.theme.colors.gray60)};
  ${(props) => props.theme.fonts.caption2}

  height: 2.4rem;

  ${(props) =>
    props.theme.media.ph(css`
      font-family: 'Pretendard';
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 1.68rem */
      letter-spacing: 0.003rem;

      height: 1.8rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      font-family: 'Pretendard';
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 1.68rem */
      letter-spacing: 0.003rem;

      height: 1.8rem;
    `)}
`;

export const EmailBadgeContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: rgba(255, 113, 91, 0.9);

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(css`
      width: 2.4rem;
      height: 2.4rem;

      border-radius: 1.2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 2.4rem;
      height: 2.4rem;

      border-radius: 1.2rem;
    `)}
`;

export const EmailBadgeIcon = styled.img`
  // Clear.
  width: 1.4rem;
  height: 1rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 1.1rem;
      height: 0.8rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 1.1rem;
      height: 0.8rem;
    `)}
`;

export const PhoneBadgeContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: rgba(30, 190, 30, 0.9);

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(css`
      width: 2.4rem;
      height: 2.4rem;

      border-radius: 1.2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 2.4rem;
      height: 2.4rem;

      border-radius: 1.2rem;
    `)}
`;

export const PhoneBadgeIcon = styled.img`
  // Clear.
  width: 1.2rem;
  height: 1.2rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 0.9rem;
      height: 0.9rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 0.9rem;
      height: 0.9rem;
    `)}
`;

export const SeparationRectangle = styled.div`
  // Clear.
  width: 0.1rem;
  height: 1.2rem;
  background: #e4e4e6;
`;

export const EditProfileContainerMobile = styled.div`
  // Clear.
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  //padding: 6.857px 10.286px;
  border-radius: 2.7429rem;
  background-color: ${(props) => props.theme.colors.blue10};
  box-shadow: 0rem 0rem 0.6857rem 0rem rgba(0, 0, 0, 0.05);

  cursor: pointer;
`;

export const EditProfileIconMobile = styled.img`
  // Clear.
  width: 1.0286rem;
  height: 1.0286rem;
`;

export const EmailContactContainer = styled.div`
  position: absolute;
  top: -4.4rem; /* 주황색 버튼 위에 배치 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.theme.media.ph(css`
      top: 2.6rem;
      left: 50%;
      transform: translateX(-50%) rotateX(180deg);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      top: 2.6rem;
      left: 50%;
      transform: translateX(-50%) rotateX(180deg);
    `)}
`;

export const PhoneContactContainer = styled.div`
  position: absolute;
  top: -4.4rem; /* 주황색 버튼 위에 배치 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.theme.media.ph(css`
      top: 2.6rem;
      left: 50%;
      transform: translateX(-50%) rotateX(180deg);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      top: 2.6rem;
      left: 50%;
      transform: translateX(-50%) rotateX(180deg);
    `)}
`;

export const ContactLetterContainer = styled.div`
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.gray60};
  backdrop-filter: blur(3rem);

  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  height: 3.6rem;

  ${(props) =>
    props.theme.media.ph(css`
      transform: rotateX(180deg);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      transform: rotateX(180deg);
    `)}
`;

export const ContactLetter = styled.div`
  color: ${(props) => props.theme.colors.gray5};
  ${(props) => props.theme.fonts.subhead3};
  white-space: nowrap;
`;

export const ContactTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent; /* 밑변의 반쪽 (1rem의 절반) */
  border-right: 0.5rem solid transparent; /* 밑변의 반쪽 */
  border-top: 0.9rem solid ${(props) => props.theme.colors.gray60}; /* 삼각형의 높이와 색상 */
`;

export const Organization = styled.div`
  // Clear.
  color: #303030;
  ${(props) => props.theme.fonts.caption1}

  height: 2.7rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${(props) =>
    props.theme.media.ph(
      () => `
	  ${props.theme.fonts.caption3};
    height: 2rem;
  `
    )}

  ${(props) =>
    props.theme.media.tab(
      () => `
	  ${props.theme.fonts.caption3};
    height: 2rem;
  `
    )}
`;

export const Introduction = styled.div`
  color: rgba(0, 0, 0, 0.5);
  ${(props) => props.theme.fonts.caption2}
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${(props) =>
    props.theme.media.ph(
      () => `
	  ${props.theme.fonts.caption4};
  `
    )}

  ${(props) =>
    props.theme.media.tab(
      () => `
	  ${props.theme.fonts.caption4};
  `
    )}
`;

export const LinkBtnsContainer = styled(ScrollContainer)`
  display: flex;
  align-items: center;
  padding: 0.4rem 0rem;
  gap: 0.8rem 1.2rem;
  width: 100%;
  flex-wrap: wrap;

  ${(props) =>
    props.theme.media.ph(css`
      margin-top: 0.6rem;
    `)}
`;

export const LinkBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  gap: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.colors.gray20};
  background: ${(props) => props.theme.colors.gray5};
  min-width: 0rem;
  max-width: 15.8rem;
  height: 3.5rem;
  cursor: pointer;

  ${(props) =>
    props.theme.media.ph(css`
      max-width: 10.8rem;
      height: 2.5rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      max-width: 15.8rem;
      height: 2.5rem;
    `)}
`;

export const LinkBtnIcon = styled.img`
  width: 1.6rem;
  height: 1.5996rem;

  ${(props) =>
    props.theme.media.ph(css`
      width: 1.2rem;
      height: 1.1997rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 1.2rem;
      height: 1.1997rem;
    `)}
`;

export const LinkBtnLetter = styled.a`
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.caption1}
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.theme.media.ph(
      () => `
	  ${props.theme.fonts.caption4};
  `
    )}

  ${(props) =>
    props.theme.media.tab(
      () => `
	  ${props.theme.fonts.caption4};
  `
    )}
`;

export const EditProfileBtn = styled.div`
  display: flex;
  height: 3.6rem;
  padding: 0.45rem 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: ${(props) => props.theme.colors.blue10};
  cursor: pointer;
  min-width: 11.5rem;
  margin-left: auto;

  ${(props) =>
    props.theme.media.tab(css`
      height: 3.2rem;
      padding: 0.4rem 1.2rem;
      border-radius: 0.8rem;
      min-width: 9.8rem;
    `)}
`;

export const EditProfileBtnLetter = styled.div`
  color: ${(props) => props.theme.colors.blue60};
  ${(props) => props.theme.fonts.caption1};

  ${(props) =>
    props.theme.media.tab(
      () => `
	  ${props.theme.fonts.caption2};
  `
    )}
`;

export const ProfileAndLink = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
