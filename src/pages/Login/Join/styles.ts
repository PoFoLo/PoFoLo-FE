import styled from 'styled-components';

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

  @media (max-width: 1440px) {
    margin: 8.8rem 6.4rem 0; /* 양옆 마진 6.4rem */
    width: calc(100% - 12.8rem); /* 양옆 마진을 제외한 전체 너비 */
  }

  p {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fonts.caption1};
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Join = styled.h2`
  ${(props) => props.theme.fonts.headline2};
  color: black;
`;

export const Step = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  ${(props) => props.theme.fonts.caption1};
  color: ${(props) => props.theme.colors.blue50};

  img {
    width: 0.9rem;
    height: 1.4rem;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  margin-top: 0.8rem;
  ${(props) => props.theme.fonts.headline1};
  color: black;
`;

export const Description = styled.h6`
  margin-top: 0.8rem;
  ${(props) => props.theme.fonts.body2};
  color: ${(props) => props.theme.colors.gray70};
`;

export const InputContainer = styled.div`
  margin-top: 6.4rem;
  width: 72rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

export const InputWrapper = styled.div`
  margin-top: 6.4rem;
  width: 72rem;
`;

export const DuplicationBtn = styled.div`
  position: absolute;
  top: 7.6rem;
  right: 3.6rem;
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
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const PrivateCheckbox = styled.div`
  position: absolute;
  top: 7.8rem;
  right: 4.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    ${(props) => props.theme.fonts.caption2};
    color: ${(props) => props.theme.colors.gray60};
  }
`;
