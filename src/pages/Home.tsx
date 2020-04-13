import React, { useRef, useEffect } from "react";
import {
  Banner,
  BannerText,
  Slogan,
  SloganContainer,
  BannerContainer,
  PhilosophyParagraph,
  PhilosophyPicture,
  Grid,
  ButtonContainer,
} from "./Home.styles";
import fabrics from "../images/fabrics.jpg";
import { Button, theme } from "../global_styles";
import { Link, RouteComponentProps } from "react-router-dom";

type HomeProps = RouteComponentProps & {
  location: { state: { scrollTo: "top" | "philosophy" } };
};

export default (props: HomeProps) => {
  const philosophyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props?.location?.state?.scrollTo === "philosophy") {
      window.scroll({
        top: (philosophyRef.current && philosophyRef.current.offsetTop - theme.headerHeight) || 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (props?.location?.state?.scrollTo === "top") {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  });

  return (
    <>
      <BannerContainer data-testid="banner">
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

      <Grid ref={philosophyRef}>
        <PhilosophyParagraph>
          The idea for pinecoat.com started when I was looking for a minimal, classic coat made of quality fabric. I
          could not believe how difficult it is to find one, finally gave up, and decided I would take matters into my
          own hand. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </PhilosophyParagraph>
        <PhilosophyPicture src={fabrics} />
        <PhilosophyParagraph>
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </PhilosophyParagraph>
        <ButtonContainer>
          <Link to="/products">
            <Button color="pineGrey">our products</Button>
          </Link>
        </ButtonContainer>
      </Grid>
    </>
  );
};
