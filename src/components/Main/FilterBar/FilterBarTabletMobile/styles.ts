import styled, { css } from 'styled-components';

export const FilterBarContainerTabletMobile = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 7.2rem 0 1.6rem 0;

  ${(props) =>
    props.theme.media.ph(css`
      margin: 7.2rem 0 2rem 0;
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      margin: 7.2rem 0 1.6rem 0;
    `)}
`;

export const FilterBarBodyTabletMobile = styled.div`
  width: 100%;
  height: 3rem;
  @media (max-width: 1440px) {
    margin: 0 6.4rem;
    width: calc(100% - 11.2rem);
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${(props) =>
    props.theme.media.ph(css`
      gap: 1rem;
      margin: 0rem 2rem 0rem 2rem;
      width: calc(100% - 4rem);
    `)}

  ${(props) =>
    props.theme.media.tab(css`
      gap: 1rem;
      margin: 0rem 2rem 0rem 2rem;
      width: calc(100% - 4rem);
    `)}
`;

export const FilterOrSortIconTabletMobile = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 30;
`;

export const FilterContainerTabletMobile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.5rem 0.6rem 0.5rem;
  gap: 0.75rem; // I should have given it flex property to use gap.
  border-radius: 0.6rem;
  border: 0.075rem solid ${(props) => props.theme.colors.gray10};
  background: #fff;
  box-shadow: 0rem 0rem 1.2rem 0rem rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 11rem;
  left: 2rem;
  z-index: 40;
`;

export const SortContainerTabletMobile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.5rem 0.6rem 0.5rem;
  gap: 0.75rem;
  border-radius: 0.6rem;
  border: 0.075rem solid ${(props) => props.theme.colors.gray10};
  background: #fff;
  box-shadow: 0rem 0rem 1.2rem 0rem rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 11rem;
  right: 2rem;
  z-index: 40;
`;

export const FilterOrSortButtonTabletMobile = styled.div<{ isSelected?: boolean }>`
  color: ${(props) => (props.isSelected ? '#000' : 'var(--Gray-70, #74757a)')};
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: ${(props) => (props.isSelected ? '600' : '400')};
  line-height: 150%;
  letter-spacing: 0.006rem;

  height: 1.8rem;
  padding-left: 0.4rem;
  padding-right: 1.5rem;
  cursor: pointer;

  &:hover {
    border-radius: 0.6rem;
    background-color: ${(props) => props.theme.colors.gray10};
  }
`;
