import styled from 'styled-components';

export const InactiveContainer = styled.div`
  display: flex;
  width: 36rem;
  height: 4rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 4.4rem;
  border: 1px solid ${(props) => props.theme.colors.gray10});
  background: #fff;
  box-shadow: 0rem 0rem 1.6rem 0rem rgba(0, 0, 0, 0.05);
`;

export const InactiveLetter = styled.span`
  width: 3.2rem;
  height: 2.7rem;
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.body2};
`;

export const InactiveIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const ActiveContainer = styled.div`
  display: flex;
  width: 36rem;
  height: 4rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 4.4rem;
  border: 1px solid ${(props) => props.theme.colors.blue30};
  background: #fff;
  box-shadow: 0rem 0rem 1.6rem 0rem rgba(0, 0, 0, 0.05);
`;

export const ActiveInput = styled.input`
  width: 30.6rem;
  height: 2.7rem;
  color: ${(props) => props.theme.colors.gray90};
  ${(props) => props.theme.fonts.body2};
`;

export const ActiveIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const ActiveLetter = styled.span`
  color: ${(props) => props.theme.colors.blue60};
  ${(props) => props.theme.fonts.body2};
`;
