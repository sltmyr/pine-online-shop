import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Banner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data?.image?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return <Img fluid={data.image.childImageSharp.fluid} style={{ width: "100%" }} />;
};

export default Banner;
