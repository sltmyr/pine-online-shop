import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ButtonPair = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        width: 100%
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
`;