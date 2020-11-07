const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY);

async function getCoats() {
  const products = await stripe.products.list();
  const prices = await stripe.prices.list();
  return prices.data.map(priceObject => {
    const model = products.data.find(product => product.id === priceObject.product).name;
    const price = priceObject.unit_amount / 100;
    return {
      model,
      price,
      mainImage: `${model}-coat-1.jpg`,
      secondImage: `${model}-coat-2.jpg`,
      thirdImage: `${model}-coat-2.jpg`,
    };
  });
}

exports.createPages = async ({ actions: { createPage } }) => {
  const coats = await getCoats();
  coats.forEach(coat => {
    createPage({
      path: `/coat/${coat.model}`,
      component: require.resolve("./src/templates/coatDetails.tsx"),
      context: { ...coat },
    });
  });
};
