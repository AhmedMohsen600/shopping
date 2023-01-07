import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.header`
  min-height: 10vh;
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 95%;
  margin: auto;
  justify-content: space-between;
  @media (max-width: 618px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SearchInput = styled.input`
  border: 0;
  background-color: #fff;
  padding: 15px 10px;
`;

export const BackArrow = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
`;

export const Categories = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  .link {
    color: white;
  }
`;

export const Category = styled.li`
  font-size: 17px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
    bottom: 0;
    left: 0;
    transition: transform 0.25s linear;
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: bottom right;
  }
  :hover::after {
    transform-origin: bottom left;
    background-color: #fff;
    transform: scaleX(1);
  }
`;
