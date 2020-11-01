import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  const paypalScriptUrl = `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&currency=EUR`;
  setHeadComponents(
    <script key="paypal-script" src={paypalScriptUrl} type="text/javascript" async />
  );
};
