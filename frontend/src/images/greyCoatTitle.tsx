import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const GreyCoatTitle: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "greyCoatTitle.jpg" }) {
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

  return <Img fluid={data.image.childImageSharp.fluid} />;
};

export default GreyCoatTitle;
