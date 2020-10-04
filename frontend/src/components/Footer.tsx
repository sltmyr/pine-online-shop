import React, { useContext } from 'react';
import { HorizontalLine, Link, FooterContent, Flag } from './Footer.styles';
import { TwoColumnGrid } from '../global_styles';
import { InstagramIcon, PhoneIcon, MailIcon } from '../pages/Contact.styles';
import { LanguageContext, Language } from '../App';
import GermanFlag from '../images/flags/de.svg';
import UkFlag from '../images/flags/uk.svg';

export default function Footer() {
  const { language, setLanguage } = useContext(LanguageContext);

  function toggleLanguage() {
    if (language === Language.english) {
      setLanguage(Language.german);
    } else {
      setLanguage(Language.english);
    }
  }

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
        <Flag onClick={toggleLanguage} src={language === Language.english ? GermanFlag : UkFlag} />
      </FooterContent>
    </TwoColumnGrid>
  );
}
