import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../global_styles';

export const StyledLink = styled(Link)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    width: 90%;
    font-size: 30px;
  }
`;
