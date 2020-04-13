import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 15% 15% 55% 15%;
    @media (max-width: ${props => props.theme.largeBreakpoint}px) {
        grid-template-columns: 7.5% 15% 70% 7.5%;   
    }
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-template-columns: 5% 45% 45% 5%;
    }
`;

export const DummyHeader = styled.div`
    height: ${props => props.theme.headerHeight}px;
`;

export const PositionWrapper = styled.div`
    position: fixed;
    background-color: white;
    width: 100%;
`;

export const MenuContainer = styled.div`
    grid-column: 3;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    height: ${props => props.theme.headerHeight}px;
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        justify-content: flex-end;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
`;

export const Logo = styled.img`
    height: 50px;
`;

export const HamburgerLogo = styled.img`
    height: 30px;
    align-self: center;
    margin-right: 30px;
`;

export const Line = styled.hr`
    grid-column-start: 2;
    grid-column-end: 4;
`;

