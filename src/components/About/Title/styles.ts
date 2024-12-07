import styled from 'styled-components';

export const TitleSection = styled.div`
  margin-top: 16.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PofoloLogo = styled.video`
  width: 36rem;
  height: 35.9rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const Title = styled.h2`
  margin-top: 2.7rem;
  ${(props) => props.theme.fonts.headingAbout};
  background: linear-gradient(135deg, #4b7aff, #5c8ef3);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.div`
  margin-top: 1.6rem;
  text-align: center;
  p {
    ${(props) => props.theme.fonts.bodyAbout};
    color: ${(props) => props.theme.colors.gray90};
  }
`;
