import React, { useContext } from "react";
import {
  Grid,
  Paragraph,
  InstagramIcon,
  PhoneIcon,
  MailIcon,
  LinkList,
  Link,
  ImageWrapper,
} from "../styles/contact.styles";
import { LanguageContext, Language } from "../context/languageContext";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BeigeCoat3 from "../images/beigeCoat3";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  return (
    <Layout>
      <SEO title="contact" />
      <Grid>
        <Paragraph>
          {text.contact[language]}
          <LinkList>
            <Link href="https://instagram.com/pinecoat" target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> @pinecoat
            </Link>
            <Link href="tel:+49-151-46133272">
              <PhoneIcon /> +49 151 46133272
            </Link>
            <Link href="mailto:hi@pinecoat.com">
              <MailIcon /> hi@pinecoat.com
            </Link>
          </LinkList>
        </Paragraph>
        <ImageWrapper>
          <BeigeCoat3 />
        </ImageWrapper>
      </Grid>
    </Layout>
  );
}

const text = {
  contact: {
    [Language.english]:
      "If you have any questions please reach out to us and we will get back to you as soon as possible.",
    [Language.german]:
      "Sende uns gern deine Fragen oder Anmerkungen. Wir antworten so schnell wie möglich.",
  },
};
