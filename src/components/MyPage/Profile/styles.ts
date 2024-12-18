import styled, { css } from 'styled-components';

export const ProfileLayout = styled.div`
  margin: 12.8rem 0 0 0;
  height: 18.4rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  width: 100%;
  max-width: 131.2rem;

  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }
  background-color: #fff;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
`;

export const ProfilePic = styled.img`
  width: 14.4rem;
  height: 14.4rem;
  border-radius: 1.2rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const NameAndBadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 27.7rem;
  height: 4.2rem;
`;

export const Name = styled.div`
  color: #000;
  font-size: 2.4rem;
  font-weight: bold;
  ${(props) => props.theme.fonts.subhead1}
`;

export const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 19.2rem;
  height: 3.2rem;
`;

export const OfferBtnContainer = styled.button`
  display: flex;
  padding: 0.4rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 3.2rem;
  background: var(--blue-50, #598df6);
  width: 11.2rem;
  height: 3.2rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const OfferBtnIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;

  ${(props) =>
    props.theme.media.tab(css`
      width: 10.5px;
      height: 10.5px;
    `)}
`;

export const OfferBtnLetter = styled.div`
  color: #fff;
  ${(props) => props.theme.fonts.caption2};
`;

export const EmailContact = styled.div`
  position: absolute;
  top: -4.4rem; /* 주황색 버튼 위에 배치 */
  left: 39.3rem; /* X축 중앙 정렬 (위치 조정 필요) */
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhoneContact = styled.div`
  position: absolute;
  top: -4.4rem; /* 초록색 버튼 위에 배치 */
  left: 43.2rem; /* 중앙 정렬 */
  transform: translateX(-50%); /* X축 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactLetterContainer = styled.div`
  border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
  background-color: ${(props) => props.theme.colors.gray60};
  backdrop-filter: blur(3rem);

  padding: 0.5rem 1.2rem 0.7rem 1.2rem;
  height: 3.6rem;
`;

export const ContactLetter = styled.div`
  color: ${(props) => props.theme.colors.gray5};
  ${(props) => props.theme.fonts.subhead3};
  height: 2.4rem;
`;

export const ContactTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent; /* 밑변의 반쪽 (1rem의 절반) */
  border-right: 0.5rem solid transparent; /* 밑변의 반쪽 */
  border-top: 0.9rem solid ${(props) => props.theme.colors.gray60}; /* 삼각형의 높이와 색상 */
`;

export const EmailBadgeContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: rgba(255, 113, 91, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.1rem 0.9rem;
  cursor: pointer;
  border-radius: 16px;
`;

export const EmailBadgeIcon = styled.img`
  width: 1.4rem;
  height: 1rem;
`;

export const PhoneBadgeContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: rgba(30, 190, 30, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  border-radius: 16px;
`;

export const PhoneBadgeIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Organization = styled.div`
  color: #303030;
  font-size: 1.6rem;
  ${(props) => props.theme.fonts.caption1};
`;

export const Introduction = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.4rem;
  ${(props) => props.theme.fonts.caption2}
`;

export const LinkBtnsContainer = styled.div`
  display: flex;
  padding: 0.4rem 0;
  align-items: center;
  gap: 1.2rem;
`;

export const LinkBtn = styled.div`
  display: flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.colors.gray20};
  background: ${(props) => props.theme.colors.gray5};
  cursor: pointer;
`;

export const LinkBtnIcon = styled.img`
  width: 1.6rem;
  height: 1.5996rem;
`;

export const LinkBtnLetter = styled.a`
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.caption1}
  height: 2.7rem;
`;
