import React, { useState } from "react";
import {
  Grid,
  PictureRight,
  PictureLeft,
  ParagraphRight,
  ParagraphTop,
  ParagraphGrey,
  ParagraphNavy,
  ModalWindow,
  ModalButton,
  ModalBackground,
} from "./Products.styles";
import picture from "../images/tailor.jpg";
import greyCoat from "../images/front-closed.jpg";
import beigeCoat from "../images/coat1.jpg";
import navyCoat from "../images/coat4.jpg";
import { theme, Button } from "../global_styles";

export default () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      {isModalOpen && (
        <ModalBackground>
          <ModalWindow data-testid="modal">
            The shop at pinecoat.com is currently under construction. Soon you will be able to order your coat here.
            <ModalButton color="pineBeige" onClick={() => setModalOpen(false)} data-testid="modal-button">
              Got it
            </ModalButton>
          </ModalWindow>
        </ModalBackground>
      )}
      <Grid>
        <PictureLeft src={picture} />
        <ParagraphTop>
          The pinecoat is a timeless, classic design piece. It goes well with different styles and will always give you
          that effortlessly elegant look. You can choose between 3 colors:{" "}
          <span style={{ color: theme.pineBeige }}>beige</span>, <span style={{ color: theme.pineGrey }}>grey</span>,
          and <span style={{ color: theme.pineNavy }}>navy</span>.
          <br />
          <br />
          30% Cashmere, 70% wool <br />
          300 €
        </ParagraphTop>
        <PictureRight src={greyCoat} />
        <ParagraphGrey>
          The grey one <br />
          <Button color="pineGrey" onClick={() => setModalOpen(true)} data-testid="buy-button">
            Buy now
          </Button>
        </ParagraphGrey>
        <PictureLeft src={beigeCoat} />
        <ParagraphRight>
          The beige one <br />
          <Button color="pineBeige" onClick={() => setModalOpen(true)}>
            Buy now
          </Button>
        </ParagraphRight>
        <PictureRight src={navyCoat} />
        <ParagraphNavy>
          The navy one <br />
          <Button color="pineNavy" onClick={() => setModalOpen(true)}>
            Buy now
          </Button>
        </ParagraphNavy>
      </Grid>
    </>
  );
};
