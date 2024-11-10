import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

export const StyledTextArea = styled.textarea<{ $error: boolean }>`
  ${(props) => props.theme.fonts.body2};
  color: ${(props) => props.theme.colors.gray90};
  background-color: ${(props) => props.theme.colors.gray10};
  padding: 1.4rem 1.6rem;
  padding-right: 6.8rem;
  border: 0.15rem solid
    ${(props) => (props.$error ? props.theme.colors.coral50 : props.theme.colors.gray20)};
  border-radius: 1.2rem;
  resize: none;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;

  &:focus {
    border-color: ${(props) =>
      props.$error ? props.theme.colors.coral50 : props.theme.colors.blue50};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray50};
  }
`;

export const IconContainer = styled.div<{ $backgroundImage: string }>`
  position: absolute;
  top: 1.4rem;
  right: 1.6rem;
  width: 2.8rem;
  height: 2.8rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ErrorMessage = styled.p`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.coral50};
  margin: 0.8rem 0rem 0rem 1.2rem;
`;
