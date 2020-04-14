import styled, { css } from "styled-components";
import { Instagram, Mail, Phone, MapPin } from "@styled-icons/feather";
import { Grid2Col } from "../global_styles";

export const Grid = styled(Grid2Col)`
    margin-top: 1em;
`;

export const Picture = styled.img`
    width: 80%;
    align-self: center;
    justify-self: center;
    grid-column: 2 / 4;
    margin-top: 1em;
    margin-bottom: 2em;
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        margin-top: 0;
        margin-bottom: 0;
        grid-column: 3;
        grid-row: 1 / 3;
    }
`;

export const Paragraph = styled.div`
    font-size: 20px;
    width: 100%;
    grid-column: 2;
    margin-bottom: 1em;
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 2 / 4;
    }
`;

export const LinkList = styled.div`
    margin-top: 4em;
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        margin-top: 1em;
    }
`;

export const Link = styled.a`
    display: block;
    margin-top: .5em;
    margin-bottom: .5em;
    text-decoration: none;
    color: ${props => props.theme.pineNavy};
`;

const iconStyle = css`
  color: ${props => props.theme.pineBeige};
  height: 1em;
  margin-right: 1em;
  margin-left: 1.5em;
`

export const InstagramIcon = styled(Instagram)`
    ${iconStyle}
`;

export const PhoneIcon = styled(Phone)`
    ${iconStyle}
`;

export const MailIcon = styled(Mail)`
    ${iconStyle}
`;

export const MapIcon = styled(MapPin)`
    ${iconStyle}
`;