import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const linkStyles = css`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;
export const StyledAnchorLink = styled(AnchorLink)`
  ${linkStyles}
`;

export const StyledButton = styled.div`
  padding: 0.1em 1em;
  width: 8em;
  height: 1.5em;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.pineNavy};
  @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
    width: 90%;
    font-size: 30px;
  }
`;
