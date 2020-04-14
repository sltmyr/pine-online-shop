import styled, { css } from "styled-components";

export const DummyHeader = styled.div`
    height: ${props => props.theme.headerHeight}px;
`;

export const PositionWrapper = styled.div`
    position: fixed;
    background-color: white;
    width: 100%;
`;

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

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
`;

export const Logo = styled.img`
    height: 50px;
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

export const HamburgerContainer = styled.div`
    display: inline-block;
    align-self: center;
    margin-right: 30px;
`;

export const LineBase = styled.div`
    height: 1px;
    width: 35px;
    background-color: ${props => props.theme.pineBeige};
    transition: 0.2s;
    margin: 6px 0;
`;
interface LineProps {
    readonly expanded: boolean;
};


export const LineTop = styled(LineBase) <LineProps>`
    ${props => props.expanded &&
        css`
            -webkit-transform: translateY(-8px) rotate(-45deg);
            transform: translateY(8px) rotate(-45deg);
        `}
`;

export const LineMiddle = styled(LineBase) <LineProps>`
    ${props => props.expanded &&
        css`
            opacity: 0;
        `}
`;

export const LineBottom = styled(LineBase) <LineProps>`
    ${props => props.expanded &&
        css`
            -webkit-transform: translateY(-6px) rotate(45deg);
            transform: translateY(-6px) rotate(45deg);
        `}
`;

export const HorizontalLine = styled.hr`
    grid-column-start: 2;
    grid-column-end: 4;
`;

