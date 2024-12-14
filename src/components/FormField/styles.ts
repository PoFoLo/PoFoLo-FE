import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SectionTitle = styled.p`
  ${(props) => props.theme.fonts.caption1};
  width: 12.8rem;
  min-width: 12.8rem;
  height: 5.6rem;
  padding: 1.6rem 0rem;
  align-items: center;
  opacity: 0.7;
  box-sizing: border-box;
`;
