import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStockDetails } from "../actions/stockActions";
import tickerData from "../data";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";

const Stocks = () => {
  const [color, setColor] = useState("white");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const getStock = useSelector((state) => state.getStock);
  const { loading, stocks } = getStock;

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
  console.log(ticker);
  useEffect(() => {
    dispatch(getStockDetails("GME"));
    if (min.o > prevDay.c) {
      setColor("green");
    } else {
      setColor("red");
    }
  }, [dispatch, min.o, prevDay.c]);

  return (
    <Card className="stockCard">
      <CardHeader>
        <h2>
          {ticker} <span style={{ color: `${color}` }}>{min.o}</span>
        </h2>
        <br />
        {!show ? (
          <Button onClick={() => setShow(true)}>Show Details</Button>
        ) : (
          <Button onClick={() => setShow(false)}>Hide Details</Button>
        )}
      </CardHeader>

      {!show ? null : (
        <CardBody>
          <div>
            <h4>Last Quote</h4>
            <h6>Bid: {lastQuote.p}</h6>
            <h6>Bid Size: {lastQuote.S}</h6>
            <h6>Ask Price: {lastQuote.P}</h6>
            <h6>Ask Size: {lastQuote.S}</h6>
          </div>
          <div>
            <h4>Day Stats</h4>
            <h6>Opening: {day.o}</h6>
            <h6>High: {day.h}</h6>
            <h6>Low: {day.l}</h6>
            <h6>Close: {day.c}</h6>
            <h6>Volume: {day.v}</h6>
            <h6>Volume Weight Avg: {day.vw}</h6>
          </div>
          <div>
            <h4>Current Price</h4>
            <h6>Price: {min.o}</h6>
            <h6>High: {min.h}</h6>
            <h6>Low: {min.l}</h6>
            <h6>Close: {min.c}</h6>
            <h6>Volume: {min.v}</h6>
            <h6>Accumulated Volume: {min.av}</h6>
            <h6>Volune Weight Avg: {min.vw}</h6>
          </div>
          <div>
            <h4>Changes</h4>
            <h6>Today's Change: {todaysChange}</h6>
            <h6>Today's Change Percent: {todaysChangePerc}</h6>
          </div>
          <div>
            <h4>Previous Day</h4>
            <h6>Open: {prevDay.o}</h6>
            <h6>Close: {prevDay.c}</h6>
            <h6>Highest Price: {prevDay.h}</h6>
            <h6>Lowest Price: {prevDay.l}</h6>
            <h6>Volume: {prevDay.v}</h6>
            <h6>Volume Weight Avg: {prevDay.vw}</h6>
          </div>
        </CardBody>
      )}
    </Card>
  );
};

export default Stocks;
