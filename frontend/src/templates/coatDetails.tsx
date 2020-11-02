import React, { useEffect, useState, useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import {
  Grid,
  Description,
  Title,
  BuyButton,
  SubTitle,
  ButtonContainer,
  MainPictureWrapper,
  LeftPictureWrapper,
  RightPictureWrapper,
} from "./coatDetails.styles";
import Checkout from "../components/checkout";
import SizeSelector from "../components/sizeSelector";
import { LanguageContext, Language } from "../context/languageContext";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY!);

const CoatDetails: React.FC<Props> = ({
  pageContext: { model },
  stripeElememtsPromise = stripePromise,
  data,
}) => {
  const { language } = useContext(LanguageContext);
  const [isCheckoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<number>(44);

  return (
    <Layout>
      <SEO title={"overview"} />
      {isCheckoutOpen && (
        <Elements stripe={stripeElememtsPromise}>
          <Checkout
            selectedColor={model as CoatColor}
            selectedSize={selectedSize}
            onComplete={() => setCheckoutOpen(false)}
          />
        </Elements>
      )}
      <Grid>
        <MainPictureWrapper>
          <Img fluid={data.mainImage.childImageSharp.fluid} />
        </MainPictureWrapper>
        <Description>
          <Title>{text.title[language]}</Title>
          {text.price[language]}
          <br />
          <SubTitle>{text.material[language]}</SubTitle>
          {text.cashmere[language]}
          <br />
          {text.wool[language]}
          <br />
          {text.polyamide[language]}
          <br />
          {text.lining[language]}
          <br />
          <SubTitle>{text.shipping[language]}</SubTitle>
          {text.shippingText[language]} <br />
          <SubTitle>{text.chooseSize[language]}</SubTitle>
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={(size: number) => setSelectedSize(size)}
          />
          <ButtonContainer>
            <BuyButton
              color={`pine${model.charAt(0).toUpperCase()}${model.slice(1)}`}
              onClick={() => setCheckoutOpen(true)}
            >
              {text.orderNow[language]}
            </BuyButton>
          </ButtonContainer>
        </Description>
        <LeftPictureWrapper>
          <Img fluid={data.thirdImage.childImageSharp.fluid} />
        </LeftPictureWrapper>
        <RightPictureWrapper>
          <Img fluid={data.secondImage.childImageSharp.fluid} />
        </RightPictureWrapper>
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ImageQuery($mainImage: String, $secondImage: String, $thirdImage: String) {
    mainImage: file(relativePath: { eq: $mainImage }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondImage: file(relativePath: { eq: $secondImage }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdImage: file(relativePath: { eq: $thirdImage }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const text = {
  error: {
    [Language.english]: "Could not find product",
    [Language.german]: "Konnte folgendes Produkt nicht finden:",
  },
  title: {
    [Language.english]: "OUR CLASSIC COAT",
    [Language.german]: "UNSER KLASSISCHER MANTEL",
  },
  price: {
    [Language.english]: "300 € including taxes and shipping.",
    [Language.german]: "300 € inkl. Steuern und Versand.",
  },
  material: {
    [Language.english]: "MATERIAL",
    [Language.german]: "MATERIAL",
  },
  cashmere: {
    [Language.english]: "10% cashmere",
    [Language.german]: "10% Kaschmir",
  },
  wool: {
    [Language.english]: "70% wool",
    [Language.german]: "70% Wolle",
  },
  polyamide: {
    [Language.english]: "20% polyamide",
    [Language.german]: "20% Polyamid",
  },
  lining: {
    [Language.english]: "lining: 100% satin",
    [Language.german]: "Futter: 100% Satin",
  },
  shipping: {
    [Language.english]: "SHIPPING",
    [Language.german]: "VERSAND",
  },
  shippingText: {
    [Language.english]: "2-3 business days in Germany, 5-7 in EU. See shipping/returns.",
    [Language.german]: "2-3 Werktage in Deutschland, 5-7 in der EU. Siehe auch Versand/Rückgabe.",
  },
  chooseSize: {
    [Language.english]: "CHOOSE YOUR SIZE",
    [Language.german]: "WÄHLE DEINE GRÖSSE",
  },
  orderNow: {
    [Language.english]: "ORDER NOW",
    [Language.german]: "JETZT BESTELLEN",
  },
};

export type CoatColor = "beige" | "grey" | "navy";

type gatsbyImage = { childImageSharp: { fluid: FluidObject } };
interface Props {
  pageContext: { model: string };
  stripeElememtsPromise?: Promise<Stripe | null>;
  data: { mainImage: gatsbyImage; secondImage: gatsbyImage; thirdImage: gatsbyImage };
}

export default CoatDetails;
