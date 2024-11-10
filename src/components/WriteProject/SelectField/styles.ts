import styled from 'styled-components';

interface SelectedTextProps {
  $isSelected: boolean;
}

interface OptionProps {
  $isSelectedValue: boolean;
}

export const SelectFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const DropdownHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  padding: 1.45rem 1.6rem;
  border: 0.15rem solid ${(props) => props.theme.colors.gray20};
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.gray10};
  box-sizing: border-box;
  cursor: pointer;
`;

export const SelectedText = styled.p<SelectedTextProps>`
  ${(props) => props.theme.fonts.body2};
  color: ${(props) => (props.$isSelected ? props.theme.colors.gray90 : props.theme.colors.gray70)};
  z-index: 2;
`;

export const IconContainer = styled.div<{ $backgroundImage: string }>`
  width: 1.8rem;
  height: 2.7rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2;
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: -0.15rem; /* border 두께만큼 위로 이동 */
  left: -0.15rem; /* border 두께만큼 왼쪽으로 이동 */
  width: calc(100% + 0.3rem); /* 좌우 border 두께를 더해 전체 너비 조정 */
  padding: 5rem 1.6rem 1.45rem 1.6rem;
  border-radius: 1.2rem;
  border: 0.15rem solid ${(props) => props.theme.colors.blue30};
  background-color: ${(props) => props.theme.colors.gray10};
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  gap: 1rem;
`;

export const Option = styled.li<OptionProps>`
  ${(props) => props.theme.fonts.body2};
  color: ${(props) =>
    props.$isSelectedValue ? props.theme.colors.blue60 : props.theme.colors.gray90};

  &:hover {
    color: ${(props) =>
      props.$isSelectedValue ? props.theme.colors.blue60 : props.theme.colors.gray60};
  }
`;

export const ErrorMessage = styled.p`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.coral50};
  margin: 0.8rem 0rem 0rem 1.2rem;
`;
