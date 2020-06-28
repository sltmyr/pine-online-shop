import React from 'react';
import { GoLeftButton, GoRightButton, LeftArrow, PictureCarousel, RightArrow } from './Carousel.styles';

interface CarouselProps {
  side: 'left' | 'right';
  pictures: string[];
}

export default (props: CarouselProps) => {
  return (
    <PictureCarousel
      side={props.side}
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
      {props.pictures.map((picture, index) => (
        <img src={picture} alt='' key={index} />
      ))}
    </PictureCarousel>
  );
};
