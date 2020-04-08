import React from "react";
import Header from "../components/Header";
import {
  Banner,
  BannerText,
  Slogan,
  SloganContainer,
  BannerContainer,
  PhilosophyContainer,
  PhilosophyParagraph,
} from "./Home.styles";

export default () => (
  <>
    <Header />
    <BannerContainer>
      <Banner>
        <BannerText>
          back to basics. <br />
          clean cut. <br />
          neutral colours.
        </BannerText>
      </Banner>
    </BannerContainer>
    <SloganContainer>
      <Slogan>one timeless model. </Slogan>
      <Slogan>three basic colours. </Slogan>
      <Slogan>effortless style.</Slogan>
    </SloganContainer>

    <PhilosophyContainer>
      <PhilosophyParagraph>
        When it get's cold outside, leaving the house in style is not easy. With a pinecoat however, you will be styled
        nicely, just like the evergreen pine tree.
      </PhilosophyParagraph>
    </PhilosophyContainer>
  </>
);
