import React from "react";
import { Container, Row, Col } from "reactstrap";
import Canada from "../components/Canada";
import Europe from "../components/Europe";
import NavbarHeader from "../components/NavbarHeader";
import Restrictions from "../components/Restrictions";
import Stocks from "../components/Stocks";
import US from "../components/US";
import Logo from "../WallStreetBets.png";
import Meta from "../components/Meta";
import Disclaimer from "../components/Disclaimer";
import Clock from "react-live-clock";

const Landing = () => {
  return (
    <>
      <NavbarHeader />
      <Meta />
      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col lg="4">{/* empty */}</Col>
          <Col lg="4">
            <img src={Logo} alt="logo" />
          </Col>
          <Col lg="4">{/* empty */}</Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center" }}>
              Ticker Dashboard{" "}
              <i style={{ color: "red" }} className="fas fa-rocket"></i>
            </h1>
            <h6 style={{ textAlign: "center" }}>
              {" "}
              Eastern/US Time:{" "}
              <Clock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"US/Eastern"}
              />
            </h6>
            <p style={{ textAlign: "center" }}>
              *Note: Data is SAMPLE only until market data portal opens at 4am
              EST
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Col lg="4">
            <Stocks tick="GME" />
          </Col>
          <Col lg="4">
            <Stocks tick="AMC" />
          </Col>
          <Col lg="4">
            <Stocks tick="NOK" />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Stocks tick="BB" />
          </Col>
          <Col lg="4">
            <Stocks tick="BBBY" />
          </Col>
          <Col lg="4">
            <Stocks tick="MAC" />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <US />
          </Col>
          <Col>
            <Canada />
          </Col>
          <Col>
            <Europe />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Restrictions />
        </Row>
      </Container>
      <footer style={{ textAlign: "center", marginTop: "1rem" }}>
        <p>
          If you enjoy this site please venmo{" "}
          <span style={{ color: "lightgreen" }}>@Owen-Roth</span> any ammount
          you please. Need to buy more GME!!!! To the MOON!!!
        </p>
        <p>
          Coded by{" "}
          <a
            href="https://github.com/oroth8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Owen Roth
          </a>
        </p>
        <p>
          Want to contribute? Post an issue? Please do so on the{" "}
          <a
            href="https://github.com/oroth8/wsb_tickers"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "lightgreen" }}
          >
            GitHub
          </a>{" "}
          page. Thank you!
        </p>
        <Disclaimer />
      </footer>
    </>
  );
};

export default Landing;
