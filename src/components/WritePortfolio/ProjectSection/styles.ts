import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`;
export const StyledScrollContainer = styled(ScrollContainer)`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

export const AddBtn = styled.div<{ $backgroundImage: string }>`
  min-width: 24rem;
  min-height: 24rem;
  background-image: url(${(props) => props.$backgroundImage});
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  ${(props) => props.theme.fonts.caption4};
  color: ${(props) => props.theme.colors.coral50};
  margin: 0.8rem 0rem 0rem 1.2rem;
`;

export * from '@/components/FormField/styles';
