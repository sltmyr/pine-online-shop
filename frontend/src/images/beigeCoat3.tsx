import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BeigeCoat3: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "beigeCoat3.jpg" }) {
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

export default BeigeCoat3;
