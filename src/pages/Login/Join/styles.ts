import styled, { css } from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBar = styled.div`
  margin-top: 8.8rem;
  width: 131.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.theme.media.ph(css`
      margin: 8rem 2rem 0;
      width: calc(100% - 4rem);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin: 8rem 2rem 0;
      width: calc(100% - 4rem);
    `)}
  
  @media (min-width: 1200px) and (max-width: 1440px) {
    margin: 8.8rem 6.4rem 0;
    width: calc(100% - 12.8rem);
  }

  p {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fonts.caption1};
  }
`;
export const StepContainer = styled.div<{
  $isStep3?: boolean;
  $isCategoryOpen?: boolean;
  $isSubCategoryOpen?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: ${(props) =>
    props.$isStep3
      ? '45%' // Step3일 때 기본 위치를 위로
      : '50%'}; // Step1, 2일 때는 중앙
  left: 50%;
  transform: ${(props) =>
    props.$isCategoryOpen || props.$isSubCategoryOpen
      ? 'translate(-50%, -65%)' // 카테고리 열릴 때 더 위로
      : 'translate(-50%, -50%)'}; // 기본 상태
  transition: transform 0.3s ease-in-out;
`;

export const Join = styled.h2`
  ${(props) => props.theme.fonts.headline4};
  color: black;

  ${(props) =>
    props.theme.media.pc(
      () => `
        ${props.theme.fonts.headline2};
      `
    )}
`;

export const Step = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  ${(props) => props.theme.fonts.caption1};
  color: ${(props) => props.theme.colors.blue50};

  img {
    width: 0.6rem;
    height: 1rem;
    cursor: pointer;
    ${(props) =>
      props.theme.media.tab(css`
        width: 0.7rem;
        height: 1.2rem;
      `)}
    ${(props) =>
      props.theme.media.pc(css`
        width: 0.9rem;
        height: 1.4rem;
      `)}
  }

  ${(props) =>
    props.theme.media.ph(
      () => `
        ${props.theme.fonts.caption4};
      `
    )}

  ${(props) =>
    props.theme.media.tab(
      () => `
        ${props.theme.fonts.caption3};
      `
    )}
`;

export const Title = styled.div`
  margin-top: 0.4rem;
  ${(props) =>
    props.theme.media.pc(css`
      margin-top: 0.8rem;
    `)}
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    ${(props) => props.theme.fonts.headline4};
    color: black;

    ${(props) =>
      props.theme.media.tab(
        () => `
        ${props.theme.fonts.headline3};
      `
      )}

    ${(props) =>
      props.theme.media.pc(
        () => `
        ${props.theme.fonts.headline1};
      `
      )}
  }
`;

export const Description = styled.h6`
  margin-top: 0.4rem;
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => props.theme.colors.gray70};

  ${(props) =>
    props.theme.media.pc(
      () => `
        margin-top: 0.8rem;
        ${props.theme.fonts.body2};
      `
    )}
`;

export const InputContainer = styled.div`
  width: 74.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  ${(props) =>
    props.theme.media.ph(css`
      width: 32rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      width: 57.6rem;
    `)}
`;

export const InputWrapper = styled.div<{ $isStep3?: boolean }>`
  margin-top: 6.4rem;
  width: 72rem;
  height: 5.6rem;

  ${(props) =>
    props.theme.media.ph(
      () => `
        width: ${props.$isStep3 ? 'calc(100vw - 4rem)' : '26rem'};
      `
    )}

  ${(props) =>
    props.theme.media.tab(css`
      width: 56rem;
    `)}
`;

export const DuplicationBtn = styled.div`
  position: absolute;
  top: 7.6rem;
  right: 3.6rem;

  ${(props) =>
    props.theme.media.ph(css`
      top: 7.55rem;
      right: 7.2rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      top: 7rem;
      right: 2.8rem;
    `)}
`;

export const NextBtn = styled.div<{
  $isSuccess?: boolean;
  $isDisabled?: boolean;
  $isDuplicate?: boolean;
}>`
  position: absolute;
  left: 74.4rem;
  top: 6.4rem;
  width: 5.6rem;
  height: 5.6rem;
  background: ${(props) =>
    props.$isDuplicate || props.$isDisabled
      ? props.theme.colors.blue30
      : props.$isSuccess
        ? 'linear-gradient(135deg, #4B7AFF 0%, #5C8EF3 100%)'
        : props.theme.colors.blue30};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) =>
    props.$isSuccess && !props.$isDisabled && !props.$isDuplicate ? 'pointer' : 'default'};
  pointer-events: ${(props) => (props.$isDisabled || props.$isDuplicate ? 'none' : 'auto')};

  img {
    width: 1.9rem;
    height: 1.9rem;
    ${(props) =>
      props.theme.media.pc(css`
        width: 2.4rem;
        height: 2.4rem;
      `)}
  }

  ${(props) =>
    props.theme.media.ph(css`
      left: 27.6rem;
      top: 6.4rem;
      width: 4.4rem;
      height: 4.4rem;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      left: 57.6rem;
      top: 6.4rem;
      width: 4.4rem;
      height: 4.4rem;
    `)}
`;

export const PrivateCheckbox = styled.div`
  position: absolute;
  top: 7.3rem;
  right: 3.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  ${(props) =>
    props.theme.media.pc(css`
      top: 7.7rem;
      right: 4.2rem;
      gap: 0.8rem;
    `)}

  ${(props) =>
    props.theme.media.ph(css`
      right: 7.5rem;
    `)}

  p {
    ${(props) => props.theme.fonts.caption3};
    color: ${(props) => props.theme.colors.gray60};

    ${(props) =>
      props.theme.media.pc(
        () => `
          ${props.theme.fonts.caption2};
        `
      )}
  }
`;
