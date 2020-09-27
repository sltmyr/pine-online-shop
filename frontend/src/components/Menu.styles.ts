import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const StyledButton = styled.div`
  padding: 0.1em 1em;
  width: 8em;
  height: 1.5em;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.pineNavy};
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    width: 90%;
    font-size: 30px;
  }
`;
