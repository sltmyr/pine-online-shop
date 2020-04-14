import React from "react";
import { Grid, Paragraph, Picture } from "./About.styles";
import picture from "../images/coat2.jpg";

export default () => (
  <>
    <Grid>
      <Paragraph>
        We are a small, family-run business based in Munich, Germany. We produce and offer high quality coats at a fair
        price.
      </Paragraph>
      <Picture src={picture} />
    </Grid>
  </>
);
