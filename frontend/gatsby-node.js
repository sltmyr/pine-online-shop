exports.createPages = ({ actions: { createPage } }) => {
  const coats = [
    {
      model: "grey",
      mainImage: "grey-coat-1.jpg",
      secondImage: "grey-coat-2.jpg",
      thirdImage: "grey-coat-3.jpg",
    },
    {
      model: "beige",
      mainImage: "beige-coat-1.jpg",
      secondImage: "beige-coat-2.jpg",
      thirdImage: "beige-coat-3.jpg",
    },
    {
      model: "navy",
      mainImage: "blue-coat-1.jpg",
      secondImage: "blue-coat-2.jpg",
      thirdImage: "blue-coat-3.jpg",
    },
  ];

  coats.forEach(coat => {
    createPage({
      path: `/coat/${coat.model}`,
      component: require.resolve("./src/templates/coatDetails.tsx"),
      context: { ...coat },
    });
  });
};
