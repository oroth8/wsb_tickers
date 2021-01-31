import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ ticker1 }) => {
  return (
    <Helmet>
      <title>$325.00 {ticker1} | WSBTs</title>
      <meta
        name="description"
        content="A dashboard for Wall Street Bet Tickers"
      />
      <meta
        name="keyword"
        content="stocks, wall street bets, tickers, stocks, shorts, info, price"
      />
    </Helmet>
  );
};

Meta.defaultProps = {
  ticker1: "GME",
};

export default Meta;
