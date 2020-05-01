import React, { useRef, useEffect } from "react";
import {
  Banner,
  BannerText,
  Slogan,
  SloganContainer,
  BannerContainer,
  PhilosophyParagraph,
  PhilosophyPicture,
  ButtonContainer,
} from "./Home.styles";
import fabrics from "../images/fabrics.jpg";
import { Button, theme, TwoColumnGrid } from "../global_styles";
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

      <TwoColumnGrid ref={philosophyRef}>
        <PhilosophyParagraph>
          The idea for pinecoat.com was born when I was looking for a minimal, classic coat made of a quality fabric.
          The search was more difficult than I imagined and I decided to take matters into my own hand.
        </PhilosophyParagraph>
        <PhilosophyPicture src={fabrics} />
        <PhilosophyParagraph>
          On pinecoat.com we offer exactly what I was searching: stylish, timeless coats at a reasonable price. If you
          are currently on the look for a nice coat, you have come to right place. We only use high quality materials
          like cashmere and wool and handcraft every coat.
        </PhilosophyParagraph>
        <ButtonContainer>
          <Link to="/products">
            <Button color="pineGrey">our products</Button>
          </Link>
        </ButtonContainer>
      </TwoColumnGrid>
    </>
  );
};
