import axios from "axios";
import React, { useEffect, useState } from "react";
import tickerData from "../data";
import { Card, CardHeader, CardBody, Alert, Button } from "reactstrap";
import Loader from "./Loader";

const Stocks = ({ tick }) => {
  const apiKey = process.env.REACT_APP_POLYGON_KEY;

  const [color, setColor] = useState("white");
  const [show, setShow] = useState(false);
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [opacity, setOpacity] = useState("1");

  const [stockData, setStockData] = useState(null);

  const getStockData = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.polygon.io/v2/aggs/ticker/${tick}/prev?unadjusted=true&apiKey=${apiKey}`
    );

    // console.log(res);
    setStockData(res.data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    getStockData();
  }, []);

  // const previousCloseData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.polygon.io/v2/aggs/ticker/${tick}/prev?unadjusted=true&apiKey=${apiKey}`
  //     );
  //     setLoading(false);
  //     if (res) {
  //       setPrevData(res);
  //     }
  //   } catch (error) {
  //     setMessage(error);
  //   }
  // };
  // const getTickerData = async () => {
  //   try {
  //     setLoading(true);
  //     setOpacity("0.5");
  //     const res = await axios.get(
  //       `https://api.polygon.io/v2/aggs/ticker/${tick}/prev?unadjusted=true&apiKey=${apiKey}`
  //     );
  //     setData(res);
  //     setLoading(false);
  //     setOpacity("1");
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getTickerData();
  //     console.log(data);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [getTickerData]);

  const {
    ticker,
    day,
    lastQuote,
    lastTrade,
    min,
    prevDay,
    todaysChange,
    todaysChangePerc,
    updated,
  } = tickerData.ticker;

  useEffect(() => {
    if (min.o > prevDay.c) {
      setColor("green");
    } else {
      setColor("red");
    }
  }, [setColor, min.o, prevDay.c]);

  return (
    <Card className="stockCard">
      {message ? <Alert color="danger">{message}</Alert> : null}
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <CardHeader>
            <h4>
              {tick}{" "}
              <span style={{ color: `${color}`, opacity: `${opacity}` }}>
                {stockData.c}
              </span>
            </h4>
            <p className="tickerData">
              Today's Change: {todaysChange} | {todaysChangePerc}% | Open: $
              {min.o}
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
              {/* <div>
            <h4>Last Quote</h4>
            <h6>Bid: {lastQuote.p}</h6>
            <h6>Bid Size: {lastQuote.S}</h6>
            <h6>Ask Price: {lastQuote.P}</h6>
            <h6>Ask Size: {lastQuote.S}</h6>
          </div> */}
              <div>
                <h5>Day Stats</h5>
                <h6>Opening: {day.o}</h6>
                <h6>High: {day.h}</h6>
                <h6>Low: {day.l}</h6>
                <h6>Close: {day.c}</h6>
                <h6>Volume: {day.v}</h6>
                <h6>Volume Weight Avg: {day.vw}</h6>
              </div>
              <div>
                <h5>Current Price</h5>
                <h6>Price: {min.o}</h6>
                <h6>High: {min.h}</h6>
                <h6>Low: {min.l}</h6>
                <h6>Close: {min.c}</h6>
                <h6>Volume: {min.v}</h6>
                <h6>Accumulated Volume: {min.av}</h6>
                <h6>Volune Weight Avg: {min.vw}</h6>
              </div>
              {/* <div>
            <h4>Changes</h4>
            <h6>Today's Change: {todaysChange}</h6>
            <h6>Today's Change Percent: {todaysChangePerc}</h6>
          </div> */}
              <div>
                <h5>Previous Day</h5>
                <h6>Open: {prevDay.o}</h6>
                <h6>Close: {prevDay.c}</h6>
                <h6>Highest Price: {prevDay.h}</h6>
                <h6>Lowest Price: {prevDay.l}</h6>
                <h6>Volume: {prevDay.v}</h6>
                <h6>Volume Weight Avg: {prevDay.vw}</h6>
              </div>
            </CardBody>
          )}
        </>
      )}
    </Card>
  );
};

export default Stocks;
