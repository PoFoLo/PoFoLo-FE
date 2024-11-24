import styled from 'styled-components';

export const FloatingBtnContainer = styled.div`
  width: 13.2rem;
  height: 6.2rem;
  display: inline-flex;
  padding: 1.6rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 6.4rem;
  background: var(--blue, linear-gradient(135deg, #4b7aff 0%, #5c8ef3 100%));
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const FloatingBtnIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;
`;

export const FloatingBtnLetter = styled.span`
  width: 5.2rem;
  height: 3rem;
  color: #fff;
  ${(props) => props.theme.fonts.subhead2};
`;
