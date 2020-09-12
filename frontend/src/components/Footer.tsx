import React from 'react';
import { HorizontalLine, Link, FooterContent } from './Footer.styles';
import { TwoColumnGrid } from '../global_styles';
import { InstagramIcon, PhoneIcon, MailIcon } from '../pages/Contact.styles';

export default () => {
  return (
    <TwoColumnGrid>
      <HorizontalLine />
      <FooterContent>
        <Link href='https://instagram.com/pinecoat' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon /> @pinecoat
        </Link>
        <Link href='tel:+49-151-46133272'>
          <PhoneIcon /> +49 151 46133272
        </Link>
        <Link href='mailto:hi@pinecoat.com'>
          <MailIcon /> hi@pinecoat.com
        </Link>
      </FooterContent>
    </TwoColumnGrid>
  );
};
