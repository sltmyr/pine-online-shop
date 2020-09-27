import styled from 'styled-components';
import banner from '../images/banner.jpg';
import { FancyText } from '../global_styles';

export const BannerContainer = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: calc(70vh - ${(props) => props.theme.headerHeight}px);
`;

export const Banner = styled.div`
  display: flex;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 100%;
  width: 70vw;
`;

export const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 30vh;
`;

export const Slogan = styled(FancyText)`
  color: ${(props) => props.theme.pineNavy};
  font-size: 25px;
  width: 70vw;
`;
