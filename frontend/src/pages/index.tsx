import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Language, LanguageContext } from "../context/languageContext";
import {
  BannerContainer,
  Banner,
  Grid,
  SloganContainer,
  Slogan,
  ParagraphTop,
  PictureLinkWrapper,
  ParagraphGrey,
  LinkWrapper,
  ParagraphHeader,
  ParagraphRight,
  ParagraphNavy,
} from "../styles/index.styles";
import { theme } from "../styles/global_styles";
import GreyCoatTitle from "../images/greyCoatTitle";
import BeigeCoatTitle from "../images/beigeCoatTitle";
import NavyCoatTitle from "../images/navyCoatTitle";
import BannerImage from "../images/banner";

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Layout>
      <SEO title="coats" />
      <BannerContainer id="home">
        <Banner>
          <BannerImage />
        </Banner>
      </BannerContainer>
      <SloganContainer>
        <Slogan>{text.slogan1[language]}</Slogan>
        <Slogan>{text.slogan2[language]}</Slogan>
        <Slogan>{text.slogan3[language]}</Slogan>
      </SloganContainer>

      <Grid id="coats">
        <ParagraphTop>
          {text.paragraphTop[language]}{" "}
          <span style={{ color: theme.pineBeige }}>{text.beige[language]}</span>,{" "}
          <span style={{ color: theme.pineGrey }}>{text.grey[language]}</span>, {text.and[language]}{" "}
          <span style={{ color: theme.pineNavy }}>{text.navy[language]}</span>.
          <br />
          <br />
          {text.material[language]} <br />
          {text.lining[language]} <br />
          300 €
        </ParagraphTop>

        <PictureLinkWrapper data-aos="fade-up" side="right" to="/coat/grey">
          <GreyCoatTitle />
        </PictureLinkWrapper>
        <ParagraphGrey data-aos="fade-up">
          <LinkWrapper to="/coat/grey">
            <ParagraphHeader>{text.theGreyOne[language]}</ParagraphHeader>
            {text.theGreyOneDescription[language]}
          </LinkWrapper>
        </ParagraphGrey>

        <PictureLinkWrapper data-aos="fade-up" side="left" to="/coat/beige">
          <BeigeCoatTitle />
        </PictureLinkWrapper>
        <ParagraphRight data-aos="fade-up">
          <LinkWrapper to="/coat/beige">
            <ParagraphHeader>{text.theBeigeOne[language]}</ParagraphHeader>
            {text.theBeigeOneDescription[language]}
          </LinkWrapper>
        </ParagraphRight>

        <PictureLinkWrapper data-aos="fade-up" side="right" to="/coat/navy">
          <NavyCoatTitle />
        </PictureLinkWrapper>
        <ParagraphNavy data-aos="fade-up">
          <LinkWrapper to="/coat/navy">
            <ParagraphHeader>{text.theNavyOne[language]}</ParagraphHeader>
            {text.theNavyOneDescription[language]}
          </LinkWrapper>
        </ParagraphNavy>
      </Grid>
    </Layout>
  );
};

const text = {
  slogan1: {
    [Language.english]: "BEAUTIFUL COATS.",
    [Language.german]: "SCHÖNE MÄNTEL.",
  },
  slogan2: {
    [Language.english]: "NEUTRAL COLORS.",
    [Language.german]: "NEUTRALE FARBEN.",
  },
  slogan3: {
    [Language.english]: "ELEGANT CUT.",
    [Language.german]: "ELEGANTER SCHNITT.",
  },
  paragraphTop: {
    [Language.english]:
      "Our PINE coat is a timeless, classic design piece. It will always give you that effortlessly elegant look, no matter which style you combine it with. You can choose between 3 colors:",
    [Language.german]:
      "Unser klassischer Designermantel ist zeitlos elegant. Mit ihm wirst du dich immer gut gestylt fühlen, egal was du drunter trägst. Du kannst zwischen 3 Farben wählen:",
  },
  beige: {
    [Language.english]: "beige",
    [Language.german]: "Beige",
  },
  grey: {
    [Language.english]: "grey",
    [Language.german]: "Grau",
  },
  navy: {
    [Language.english]: "navy",
    [Language.german]: "Navy",
  },
  and: {
    [Language.english]: "and",
    [Language.german]: "und",
  },
  material: {
    [Language.english]: "10% cashmere, 70% wool, 20% polyamide",
    [Language.german]: "10% Kaschmir, 70% Wolle, 20% Polyamid",
  },
  lining: {
    [Language.english]: "lining: 100% satin",
    [Language.german]: "Futter: 100% Satin",
  },
  theGreyOne: {
    [Language.english]: "THE GREY ONE",
    [Language.german]: "DER IN GRAU",
  },
  theGreyOneDescription: {
    [Language.english]:
      "You can combine our classic grey coat with virtually anything and you will always look and feel great.",
    [Language.german]:
      "Unseren klassischen, grauen Mantel kannst du mit wirklich allem kombinieren. Du wirst darin immer gut aussehen und dich auch so fühlen.",
  },
  theBeigeOne: {
    [Language.english]: "THE BEIGE ONE",
    [Language.german]: "DER IN BEIGE",
  },
  theBeigeOneDescription: {
    [Language.english]:
      "Our best seller, and with good reason. In our camel colored coat you are definitely going to stand out.",
    [Language.german]:
      "Zurecht unser Bestseller. In unserem Kamelfarbenen Mantel fühlt sich einfach jeder gut.",
  },
  theNavyOne: {
    [Language.english]: "THE NAVY ONE",
    [Language.german]: "DER IN NAVY",
  },
  theNavyOneDescription: {
    [Language.english]:
      "Our navy coat is the right choice for anyone tired of wearing only black in the colder months of the year.",
    [Language.german]:
      "Unser Navy Mantel ist genau das Richtige für alle die in den kälteren Monaten nicht immer schwarz tragen wollen.",
  },
};

export default Home;
