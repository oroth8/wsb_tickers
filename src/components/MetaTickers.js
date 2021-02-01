import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Meta from "./Meta";
import axios from "axios";

const MetaTickers = () => {
  const [selTicker, setSelTicker] = useState("GME");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [marketData, setMarketData] = useState({
    min: {
      o: "0",
    },
  });

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onChange = (e) => {
    e.preventDefault();
  };

  // Api key from env file
  const apiKey = process.env.REACT_APP_POLYGON_KEY;
  // Loading state for api requests
  const [loading, setLoading] = useState(0);

  const getTickerData = async () => {
    try {
      setLoading(loading);
      const res = await axios.get(
        `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${selTicker}?&apiKey=${apiKey}`
      );
      if (res.data) {
        setMarketData((await res).data.ticker);
      }
      if (loading < 3) {
        setLoading(loading + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // calls ticker data every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getTickerData();
    }, 3000);
    return () => clearInterval(interval);
  }, [getTickerData, marketData]);

  return (
    <div style={{ float: "right" }}>
      <p>Set your tab ticker! *Price won't change when market is closed</p>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        onChange={(e) => onChange(e)}
      >
        <DropdownToggle caret>{selTicker}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setSelTicker("GME")}>GME</DropdownItem>
          <DropdownItem onClick={() => setSelTicker("AMC")}>AMC</DropdownItem>
          <DropdownItem onClick={() => setSelTicker("NOK")}>NOK</DropdownItem>
          <DropdownItem onClick={() => setSelTicker("BB")}>BB</DropdownItem>
          <DropdownItem onClick={() => setSelTicker("BBBY")}>BBBY</DropdownItem>
          <DropdownItem onClick={() => setSelTicker("MAC")}>MAC</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Meta
        ticker1={selTicker}
        price={marketData.min.o.toFixed(2).toString()}
      />
    </div>
  );
};

export default MetaTickers;
