import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#8040bf' : '#f26a2e')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  font-weight: 400;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};

  &:hover {
    background: ${({ primary }) => (primary ? '#f26a2e ' : '#8040bf')};
    transform: translateY(-2px);
  }
`;
