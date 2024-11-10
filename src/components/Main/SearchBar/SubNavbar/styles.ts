import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ddd;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 0.3rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SortButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 0.3rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 40px;
  padding: 12px;
  border-radius: 44px;
  border: 1px solid var(--Gray-10, #f2f2f3);
  background: #fff;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.05);
  gap: 8px;
`;

export const PlaceholderText = styled.input`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.body2};
`;

export const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

// export const SearchBar = styled.input`
//   display: flex;
//   width: 360px;
//   height: 40px;
//   padding: 12px;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;

//   border-radius: 44px;
//   border: 1px solid var(--Gray-10, #f2f2f3);
//   background: #fff;

//   /* Shadow 5% */
//   box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.05);

//   text-align: center;
// `;
