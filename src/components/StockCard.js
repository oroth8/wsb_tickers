import axios from "axios";
import React, { useEffect, useState } from "react";
import tickerData from "../Data/data";
import { Card, CardHeader, CardBody, Alert, Button } from "reactstrap";
import Loader from "./Loader";

const StockCard = ({ tick }) => {
  // Api key from env file
  const apiKey = process.env.REACT_APP_POLYGON_KEY;
  // changes color of price based on up or down for day.
  const [color, setColor] = useState("white");
  // details button state
  const [show, setShow] = useState(false);
  // const [data, setData] = useState(null);
  // Loading state for api requests
  const [loading, setLoading] = useState(0);
  // message/alert state
  const [message, setMessage] = useState(null);
  // while loading, price will change opacity to show price is updating
  // eslint-disable-next-line
  const [opacity, setOpacity] = useState("1");

  const [stockData, setStockData] = useState(null);
  const [marketData, setMarketData] = useState(tickerData);

  // grabs previous close data from polygon
  const getPrevCloseData = async () => {
    try {
      //  setLoading(true)
      const res = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/${tick}/prev?unadjusted=true&apiKey=${apiKey}`
      );
      if (res) {
        setStockData(res.data.results[0]);
      }
      // setLoading(loading + 1);
    } catch (error) {
      if (error.response.statusText) {
        setMessage(error.response.statusText);
      } else {
        setMessage("Server Error");
      }
      setLoading(false);
    }
  };
  // API returns error if market is closed, enable when market opens (need to create conditonal for this)
  const getTickerData = async () => {
    try {
      setLoading(loading);
      setOpacity("0.5");
      const res = await axios.get(
        `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${tick}?&apiKey=${apiKey}`
      );
      if (res.data) {
        setMarketData((await res).data);
      }
      if (loading < 2) {
        setLoading(loading + 1);
      }
      setOpacity("1");
    } catch (error) {
      setMessage(error.response.statusText);
      setLoading(false);
    }
  };

  // when page mounts, get previous close data from function
  // ***change to getTickerData when market opens, remove close data func.
  useEffect(() => {
    // getPrevCloseData();
    // eslint-disable-next-line
  }, []);

  // calls ticker data every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getTickerData();
    }, 5000);
    return () => clearInterval(interval);
  }, [getTickerData, marketData]);

  // deconstructing sample data / real ticker data (SEE POLYGON FOR RESPONSE OBJECT)
  const {
    // ticker,
    day,
    // lastQuote,
    // lastTrade,
    min,
    prevDay,
    todaysChange,
    todaysChangePerc,
    // updated,
  } = marketData.ticker;

  // color changer for positive or negative pricing
  useEffect(() => {
    if (min.o > prevDay.c) {
      setColor("green");
    } else {
      setColor("red");
    }
  }, [setColor, min.o, prevDay.c]);

  return (
    <Card className="stockCard">
      {/* If message, display it. Otherwise null */}
      {message ? <Alert color="danger">{message}</Alert> : null}
      {/* If loading, display loader. Otherwise load stock data */}
      {loading === 0 ? (
        <Loader />
      ) : (
        <>
          <CardHeader>
            <h4>
              {tick}{" "}
              {/* price color and price opacity options based on price/loading */}
              <span style={{ color: `${color}`, opacity: `${opacity}` }}>
                {min.c.toFixed(2)}
              </span>
            </h4>
            <p className="tickerData">
              Today's Change:{" "}
              {todaysChange > 0 ? (
                <span style={{ color: "green" }}>${todaysChange}</span>
              ) : (
                <span style={{ color: "red" }}>${todaysChange}</span>
              )}{" "}
              |{" "}
              {todaysChangePerc > 0 ? (
                <span style={{ color: "green" }}>{todaysChangePerc}</span>
              ) : (
                <span style={{ color: "red" }}>{todaysChangePerc}</span>
              )}{" "}
              % | Open: ${day.o}
            </p>
            <br />
            {!show ? (
              <Button className="detailsBtn" onClick={() => setShow(true)}>
                Details
              </Button>
            ) : (
              <Button className="detailsBtn" onClick={() => setShow(false)}>
                Hide
              </Button>
            )}
          </CardHeader>

          {!show ? null : (
            <CardBody>
              {/* SEE POLYGON API DOCS FOR INFO */}
              {/* CURRENT DAY STATS */}
              <div>
                <h5>Day Stats</h5>
                <h6>Opening: {day.o}</h6>
                <h6>High: {day.h}</h6>
                <h6>Low: {day.l}</h6>
                <h6>Close: {day.c}</h6>
                <h6>Volume: {day.v}</h6>
                <h6>Volume Weight Avg: {day.vw}</h6>
              </div>
              {/* END CURRENT DAY STATS */}
              {/* PREV DAY */}
              <div>
                <h5>Previous Day</h5>
                <h6>Open: {prevDay.o}</h6>
                <h6>Close: {prevDay.c}</h6>
                <h6>Highest Price: {prevDay.h}</h6>
                <h6>Lowest Price: {prevDay.l}</h6>
                <h6>Volume: {prevDay.v}</h6>
                <h6>Volume Weight Avg: {prevDay.vw}</h6>
              </div>
              {/* END PREV DAY */}
              {/* LAST QUOTE */}
              {/* <div>
     <h4>Last Quote</h4>
     <h6>Bid: {lastQuote.p}</h6>
     <h6>Bid Size: {lastQuote.S}</h6>
     <h6>Ask Price: {lastQuote.P}</h6>
     <h6>Ask Size: {lastQuote.S}</h6>
   </div> */}
              {/* END LAST QUOTE */}
              {/* LAST MIN BAR */}
              {/* <div>
         <h5>Latest Minute Bar</h5>
         <h6>Price: {min.o}</h6>
         <h6>High: {min.h}</h6>
         <h6>Low: {min.l}</h6>
         <h6>Close: {min.c}</h6>
         <h6>Volume: {min.v}</h6>
         <h6>Accumulated Volume: {min.av}</h6>
         <h6>Volune Weight Avg: {min.vw}</h6>
       </div> */}
              {/* END LAST MINUTE BAR */}
              {/* DAY CHANGES */}
              {/* <div>
     <h4>Changes</h4>
     <h6>Today's Change: {todaysChange}</h6>
     <h6>Today's Change Percent: {todaysChangePerc}</h6>
   </div> */}
              {/* END DAY CHANGES */}
            </CardBody>
          )}
        </>
      )}
    </Card>
  );
};

export default StockCard;
