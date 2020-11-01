import React, { useContext } from "react";
import { StyledLink, StyledButton, StyledAnchorLink } from "./menu.styles";
import { LanguageContext, Language } from "../context/languageContext";

const Menu: React.FC<Props> = ({ onClickCloseMenu }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <StyledAnchorLink to={"/#coats"}>
        <StyledButton color="pineNavy" onClick={onClickCloseMenu}>
          {text.coats[language]}
        </StyledButton>
      </StyledAnchorLink>
      <StyledLink to="/about">
        <StyledButton color="pineNavy" onClick={onClickCloseMenu}>
          {text.about[language]}
        </StyledButton>
      </StyledLink>
      <StyledLink to="/contact">
        <StyledButton color="pineNavy" onClick={onClickCloseMenu}>
          {text.contact[language]}
        </StyledButton>
      </StyledLink>
    </>
  );
};

const text = {
  coats: {
    [Language.english]: "coats",
    [Language.german]: "Mäntel",
  },
  about: {
    [Language.english]: "about",
    [Language.german]: "Über uns",
  },
  contact: {
    [Language.english]: "contact",
    [Language.german]: "Kontakt",
  },
};

interface Props {
  onClickCloseMenu?: () => void;
}

export default Menu;
