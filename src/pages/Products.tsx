import React, { useState, useEffect } from "react";
import {
  Grid,
  ParagraphRight,
  ParagraphTop,
  ParagraphGrey,
  ParagraphNavy,
  ModalWindow,
  ModalButton,
  ModalBackground,
  CarouselRight,
  CarouselLeft,
  PictureLeft,
  GoLeftButton,
  LeftArrow,
  GoRightButton,
  RightArrow,
} from "./Products.styles";
import picture from "../images/tailor.jpg";
import greyCoat1 from "../images/front-closed.jpg";
import greyCoat2 from "../images/front-open.jpg";
import greyCoat3 from "../images/back.jpg";
import beigeCoat1 from "../images/beige-coat-1.jpg";
import beigeCoat2 from "../images/beige-coat-2.jpg";
import navyCoat1 from "../images/blue-coat-1.jpg";
import navyCoat2 from "../images/blue-coat-2.jpg";
import navyCoat3 from "../images/blue-coat-3.jpg";
import { theme, Button } from "../global_styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  useEffect(() => window.scroll({ top: 0, left: 0 }));
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
        <CarouselRight
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <GoLeftButton onClick={onClickHandler}>
              <LeftArrow />
            </GoLeftButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <GoRightButton onClick={onClickHandler}>
              <RightArrow />
            </GoRightButton>
          )}
        >
          <img src={greyCoat1} alt="" />
          <img src={greyCoat2} alt="" />
          <img src={greyCoat3} alt="" />
        </CarouselRight>

        <ParagraphGrey>
          The grey one <br />
          <Button color="pineGrey" onClick={() => setModalOpen(true)} data-testid="buy-button">
            Buy now
          </Button>
        </ParagraphGrey>
        <CarouselLeft
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <GoLeftButton onClick={onClickHandler}>
              <LeftArrow />
            </GoLeftButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <GoRightButton onClick={onClickHandler}>
              <RightArrow />
            </GoRightButton>
          )}
        >
          <img src={beigeCoat1} alt="" />
          <img src={beigeCoat2} alt="" />
        </CarouselLeft>
        <ParagraphRight>
          The beige one <br />
          <Button color="pineBeige" onClick={() => setModalOpen(true)}>
            Buy now
          </Button>
        </ParagraphRight>
        <CarouselRight
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <GoLeftButton onClick={onClickHandler}>
              <LeftArrow />
            </GoLeftButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <GoRightButton onClick={onClickHandler}>
              <RightArrow />
            </GoRightButton>
          )}
        >
          <img src={navyCoat1} alt="" />
          <img src={navyCoat2} alt="" />
          <img src={navyCoat3} alt="" />
        </CarouselRight>
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
