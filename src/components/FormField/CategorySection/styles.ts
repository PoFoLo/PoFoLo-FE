import styled, { css } from 'styled-components';

interface SelectedTextProps {
  $isSelected: boolean;
}

interface OptionProps {
  $isSelectedValue: boolean;
}

export const SelectFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${(props) =>
    props.theme.media.pc(css`
      flex-direction: row;
    `)}
`;

export const DropdownHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray20};
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.gray10};
  box-sizing: border-box;
  cursor: pointer;

  ${(props) =>
    props.theme.media.pc(css`
      padding: 1.45rem 1.6rem;
    `)}
`;

export const SelectedText = styled.p<SelectedTextProps>`
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => (props.$isSelected ? props.theme.colors.gray90 : props.theme.colors.gray70)};
  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.body2};
  `
    )}
`;

export const IconContainer = styled.div<{ $backgroundImage: string }>`
  width: 1.8rem;
  height: 2.7rem;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  top: -0.15rem; /* border 두께만큼 위로 이동 */
  left: -0.15rem; /* border 두께만큼 왼쪽으로 이동 */
  width: calc(100% + 0.3rem); /* 좌우 border 두께를 더해 전체 너비 조정 */
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid ${(props) => props.theme.colors.blue30};
  background-color: ${(props) => props.theme.colors.gray10};
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  ${(props) =>
    props.theme.media.pc(css`
      padding: 1.45rem 1.6rem;
    `)}
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.35rem 0rem;

  ${(props) =>
    props.theme.media.pc(css`
      margin: 0rem;
    `)}
`;

export const FirstOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.fonts.body4};
  color: ${(props) => props.theme.colors.gray50};

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.body2};
  `
    )}
`;

export const Option = styled.li<OptionProps>`
  ${(props) => props.theme.fonts.body4};
  color: ${(props) =>
    props.$isSelectedValue ? props.theme.colors.blue60 : props.theme.colors.gray60};

  &:hover {
    color: ${(props) =>
      props.$isSelectedValue ? props.theme.colors.blue60 : props.theme.colors.gray90};
  }

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.body2};
  `
    )}
`;

export const ErrorMessage = styled.p`
  ${(props) => props.theme.fonts.caption5};
  color: ${(props) => props.theme.colors.coral50};
  margin: 0.8rem 0rem 0rem 1.2rem;

  ${(props) =>
    props.theme.media.pc(
      () => `
	  ${props.theme.fonts.caption4};
  `
    )}
`;

export * from '@/components/FormField/styles';
