import React from "react";
import { Grid, Paragraph, Picture, InstagramIcon, PhoneIcon, MailIcon, LinkList, Link } from "./Contact.styles";
import picture from "../images/coat3.jpg";

export default () => (
  <Grid>
    <Paragraph>
      If you have any questions please reach out to us and we will get back to you as soon as possible.
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
    <Picture src={picture} />
  </Grid>
);
