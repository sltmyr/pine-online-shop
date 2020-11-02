import React, { useContext } from "react";
import {
  PhilosophyHeader,
  HeaderRight,
  ParagraphRight,
  ButtonContainer,
  PhilosopyParagraph,
  ParagraphLeft,
  AboutImageWrapper,
  PhilosophyImageWrapper,
} from "../styles/about.styles";
import AboutImage from "../images/about";
import { LanguageContext, Language } from "../context/languageContext";
import { TwoColumnGrid, Button } from "../styles/global_styles";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Bike from "../images/bike";
import Layout from "../components/layout";
import SEO from "../components/seo";

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Layout>
      <SEO title="about" />
      <TwoColumnGrid>
        <PhilosophyHeader data-aos="fade-up">{text.title[language]}</PhilosophyHeader>
        <PhilosopyParagraph data-aos="fade-up">{text.titleText[language]}</PhilosopyParagraph>
        <HeaderRight data-aos="fade-up">{text.craftsmanship[language]}</HeaderRight>
        <ParagraphRight data-aos="fade-up">{text.craftsmanshipText[language]}</ParagraphRight>
        <HeaderRight data-aos="fade-up">{text.materials[language]}</HeaderRight>
        <ParagraphRight data-aos="fade-up">{text.materialsText[language]}</ParagraphRight>
        <HeaderRight data-aos="fade-up">{text.designProcess[language]}</HeaderRight>
        <ParagraphRight data-aos="fade-up">{text.designProcessText[language]}</ParagraphRight>
        <PhilosophyImageWrapper data-aos="fade-up">
          <Bike />
        </PhilosophyImageWrapper>
        <PhilosopyParagraph data-aos="fade-up">{text.differences[language]}</PhilosopyParagraph>
        <ButtonContainer data-aos="fade-up">
          <AnchorLink to="/#coats">
            <Button color="pineBeige">{text.ourCoats[language]}</Button>
          </AnchorLink>
        </ButtonContainer>
        <PhilosophyHeader data-aos="fade-up">{text.aboutUs[language]}</PhilosophyHeader>
        <ParagraphLeft data-aos="fade-up">{text.aboutUsText[language]}</ParagraphLeft>
        <AboutImageWrapper data-aos="fade-up">
          <AboutImage />
        </AboutImageWrapper>
      </TwoColumnGrid>
    </Layout>
  );
};

const text = {
  title: {
    [Language.english]: "ARCHITECTURE MEETS FASHION DESIGN",
    [Language.german]: "ARCHITEKTUR TRIFFT MODE DESIGN",
  },
  titleText: {
    [Language.english]:
      "Going from architecture to fashion design made us realize that these two worlds have much in common. Beautiful thoughts turn into sketches, are then enhanced to prototypes and result in a finalized product.",
    [Language.german]:
      "Als wir von Architektur auf Mode Design umgestiegen sind, haben wir gemerkt, dass diese beiden Welten viel gemein haben. Schöne Gedanken werden gezeichnet, in Prototypen zum Leben erweckt und am Ende steht das fertige Produkt.",
  },
  craftsmanship: {
    [Language.english]: "CRAFTSMANSHIP",
    [Language.german]: "VERARBEITUNGSQUALIÄT",
  },
  craftsmanshipText: {
    [Language.english]:
      "At first glance it might not always be obvious, but most people can distinguish a poorly sewn garment from a quality piece when putting it on. Similarly, a carefully constructed building will always prove to be more durable than one where shortcuts were used during construction.",
    [Language.german]:
      "Es mag nicht immer direkt auf den ersten Blick auffallen, aber die meisten von uns können schlecht genähte Kleidung von Qualitätsware unterscheiden. Genauso wird ein solide gebautes Gebäude die Jahre besser überstehen als eins bei dem während der Bauphase agekürzt wurde.",
  },
  materials: {
    [Language.english]: "MATERIALS",
    [Language.german]: "MATERIALIEN",
  },
  materialsText: {
    [Language.english]:
      "Picking the right material is an important part of the design process. A hotel lobby with a floor made out of Italian marble gives you a different feeling than one with an old-fashioned carpet flooring. The same goes for a coat made out of cashmere wool compared to polyester.",
    [Language.german]:
      "Das richtige Material auszuwählen ist ein wichtiger Teil des Design Prozesses. Eine Hotellobby mit einem italienischen Marmorboden gibt dir ein anderes Gefühl als eine mit einem altmodischen Teppichboden. Das Gleiche gilt für Mäntel aus Kaschmirwolle im Vergleich mit Polyester.",
  },
  designProcess: {
    [Language.english]: "DESIGN PROCESS",
    [Language.german]: "DESIGNPROZESS",
  },
  designProcessText: {
    [Language.english]:
      "In both disciplines, the design process contains sketches, schematic drawings, and construction guidelines.",
    [Language.german]:
      "In beiden Disziplinen besteht der Designprozess aus Zeichnungen, Schematischen Modellen und Bauplänen",
  },
  differences: {
    [Language.english]:
      "The main difference between architecture and fashion design is the lifespan of the finished products. Until the early 2000s, fashion design had two seasons: spring/summer and fall/winter. Over time, this has evolved to a season starting every week, giving us 52 “micro-seasons” per year. Compare that to the expected lifespan of buildings that is longer than a human life. Our goal is to bring that longevity to fashion, creating timeless, well-crafted coats that stay with you.",
    [Language.german]:
      "Der große Unterschied zwischen Architektur und Modedesign ist die Lebensdauer der fertigen Produkte. Bis in die frühen 2000er gab es in der Modewelt zwei Kollektionen pro Jahr: Frühjahr/Sommer und Herbst/Winter. Über die Zeit wurden es immer mehr und inzwischen kommt jede Woche eine neue Kollektion raus. Das ist schwer zu verleichen mit der Lebensdauer von Gebäuden die länger ist als ein Menschenleben. Unser Ziel ist es, diese Langlebigkeit in die Modewelt zu bringen. Wir produzieren zeitlose, gut verarbeitete Mäntel die dich lange begleiten.",
  },
  ourCoats: {
    [Language.english]: "OUR COATS",
    [Language.german]: "UNSERE MÄNTEL",
  },
  aboutUs: {
    [Language.english]: "ABOUT US",
    [Language.german]: "ÜBER UNS",
  },
  aboutUsText: {
    [Language.english]:
      "PINE is a small, family-run shop based in Munich, Germany. We produce and offer high quality coats at a fair price. Every coat is made from a nice, soft fabric (10% cashmere, 70% wool, 20% polyamide) and handmade in the heart of Istanbul's fashion district. We ship them directly to you from Munich and can currently offer our coats to anyone in the european union. Shipping is free, and in the unlikely case that the coat does not live up to your expectations, returns are free as well.",
    [Language.german]:
      "PINE ist ein kleiner Familienbetrieb aus München. Wir produzieren und verkaufen Mäntel von hoher Qualität zu einem fairen Preis. Jeder Mantel wird aus einem schönen, weichen Stoff (10% Kaschmir, 70% Wolle, 20% Polyamid) im Herzen von Istanbuls Modebezirk von Hand genäht. Wir versenden unsere Mäntel direkt aus München und können sie zur Zeit jedem in der EU anbieten. Der Versand ist kostenlos und in dem unwahrscheinlichen Fall, dass dir der Mantel nicht gefällt, ist die Rücksendung ebenfalls kostenlos.",
  },
};

export default About;
