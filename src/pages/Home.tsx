import React, { useRef } from "react";
import Header from "../components/Header";
import {
  Banner,
  BannerText,
  Slogan,
  SloganContainer,
  BannerContainer,
  PhilosophyParagraph,
  PilosophyPicture,
  Grid,
  ButtonContainer,
} from "./Home.styles";
import fabrics from "../images/fabrics.jpg";
import { Button, theme } from "../global_styles";

export default () => {
  const philosphyRef = useRef<HTMLDivElement>(null);
  const scrollToPhilosophy = () =>
    window.scroll({
      top: (philosphyRef.current && philosphyRef.current.offsetTop - theme.headerHeight) || 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <>
      <Header scrollToPhilosophy={scrollToPhilosophy} />
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

      <Grid ref={philosphyRef}>
        <PhilosophyParagraph>
          The idea for pinecoat.com started when I was looking for a minimal, classic coat made of quality fabric. I
          could not believe how difficult it is to find one, finally gave up, and decided I would take matters into my
          own hand. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </PhilosophyParagraph>
        <PilosophyPicture src={fabrics} />
        <PhilosophyParagraph>
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </PhilosophyParagraph>
        <ButtonContainer>
          <Button color="pineGrey">our products</Button>
        </ButtonContainer>
      </Grid>
    </>
  );
};
