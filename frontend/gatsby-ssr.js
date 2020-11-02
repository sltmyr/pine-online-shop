import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  console.log("id: " + process.env.GATSBY_PAYPAL_CLIENT_ID);
  const paypalScriptUrl = `https://www.paypal.com/sdk/js?client-id=${process.env.GATSBY_PAYPAL_CLIENT_ID}&currency=EUR`;
  setHeadComponents(
    <script key="paypal-script" src={paypalScriptUrl} type="text/javascript" async />
  );
};
