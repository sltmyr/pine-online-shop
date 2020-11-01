import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import "aos/dist/aos.css";
import AOS from "aos";
import { theme, GlobalStyles } from "../styles/global_styles";
import Header from "./header";
import Footer from "./footer";

const Layout: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Layout;
