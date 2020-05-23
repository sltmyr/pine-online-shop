import React from "react";
import { Grid, Paragraph, Picture } from "./About.styles";
import picture from "../images/about.jpg";

export default () => (
  <>
    <Grid>
      <Paragraph>
        pinecoat.com is a small, family-run shop based in Munich, Germany. We produce and offer high quality coats at a
        fair price. Every coat is made from a nice, soft fabric (30% cashmere, 70% wool) and handmade in the heart of
        Istanbul's fashion district. From there they are brought to our store in Munich from where we ship them to you.
        We can currently offer our coats to anyone in the european union. Shipping is free, and in the unlikely case
        that the coat does not live up to your expectations, you can send it back and get a full refund.
      </Paragraph>
      <Picture src={picture} />
    </Grid>
  </>
);
