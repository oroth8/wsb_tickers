import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Loader from "./Loader";

const News = () => {
  const apiKey = process.env.REACT_APP_POLYGON_KEY;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selTicker, setSelTicker] = useState("GME");

  const getTickerNews = async (tik) => {
    try {
      setLoading(true);
      const res = axios.get(
        `https://api.polygon.io/v1/meta/symbols/${selTicker}/news?perpage=8&page=1&apiKey=${apiKey}`
      );
      if (res) {
        const { data } = res;
        setNews((await res).data);
      }
      setLoading(false);
    } catch (error) {}
  };

  const onChange = (e) => {
    e.preventDefault();
    setSelTicker(e.target.value);
    console.log(e);
    // getTickerNews(e.target.value);
    // console.log(selTicker);
  };

  useEffect(() => {
    getTickerNews();
  }, [selTicker]);

  return (
    <>
      <h2 style={{ marginRight: "1rem" }}>
        {selTicker} News <i className="far fa-newspaper"></i>
      </h2>
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
      <Row>
        {!loading ? (
          news.map((item) => (
            <Col
              className="newsCard"
              key={item.timestamp}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <img src={item.image} alt={item.title} />
              <div>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </div>
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>
    </>
  );
};

export default News;
