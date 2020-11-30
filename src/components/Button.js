import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(link)`
  background: ${({ primary }) => (primary ? '#f26a2e' : '#077bf1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
`;