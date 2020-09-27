import styled from 'styled-components';
import { TwoColumnGrid, Button, FancyText } from '../global_styles';

export const Grid = styled(TwoColumnGrid)`
  margin-top: 1em;
`;

export const ErrorMessage = styled.div`
  font-size: 16px;
  width: 100%;
  grid-column: 2 / 4;
`;

export const MainPicture = styled.img`
  width: 100%;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 4;
  margin-top: 1em;
  margin-bottom: 2em;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 2;
  }
`;

export const LeftPicture = styled(MainPicture)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    padding: 10px;
    grid-column: 2;
  }
`;

export const RigthPicture = styled(MainPicture)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    padding: 10px;

    grid-column: 3;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 1em;
  grid-column: 3;

  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-top: 1em;
    grid-column: 2 / 4;
    padding-left: 0;
  }
`;

export const Title = styled(FancyText)`
  font-size: 30px;
  margin-bottom: 1em;
`;

export const SubTitle = styled(FancyText)`
  font-size: 25px;
  margin-top: 2em;
  margin-bottom: 1em;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const BuyButton = styled(Button)`
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
`;
