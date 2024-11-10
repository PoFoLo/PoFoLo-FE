import styled from 'styled-components';

export const Card = styled.div`
  width: 31rem;
  height: 25.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 31rem;
  height: 17.4rem;
  border-radius: 11.25px;
`;

export const MemberName = styled.div`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.caption3};

  width: 31rem;
  height: 2rem;
  margin-top: 1.2rem;
  text-align: left;
`;

export const ProjectName = styled.div`
  color: #000;
  ${(props) => props.theme.fonts.caption1};

  width: 31rem;
  height: 2.7rem;
  text-align: left;
`;

export const Reactions = styled.div`
  width: 31rem;
  height: 1.8rem;
  padding-top: 0.2rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.375rem;
`;

export const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;

  display: flex;
  align-items: center;
  margin-right: 0.188rem;
`;

export const Letter = styled.span`
  color: rgba(0, 0, 0, 0.5);
  ${(props) => props.theme.fonts.caption4};

  width: 1.5rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  margin-right: 0.4rem;
`;
