import styled from "styled-components";
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