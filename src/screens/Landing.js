import React from "react";
import { Container, Row, Col } from "reactstrap";
import Canada from "../components/brokers/Canada";
import Europe from "../components/brokers/Europe";
import NavbarHeader from "../components/NavbarHeader";
import Restrictions from "../components/Restrictions";
import StockCard from "../components/StockCard";
import US from "../components/brokers/US";
import Logo from "../assets/img/WallStreetBets.png";
import Disclaimer from "../components/Disclaimer";
import Clock from "react-live-clock";
import News from "../components/News";
import MetaTickers from "../components/MetaTickers";
import ShortInt from "../components/ShortInt";
const Landing = () => {
  return (
    <>
      <NavbarHeader />
      {/* <Meta /> */}
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
            {/* <p style={{ textAlign: "center" }}>
              *Note: Prices remain 0 until market opens. EST
            </p> */}
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Col lg="4">
            <StockCard tick="GME" />
          </Col>
          <Col lg="4">
            <StockCard tick="AMC" />
          </Col>
          <Col lg="4">
            <StockCard tick="NOK" />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <StockCard tick="BB" />
          </Col>
          <Col lg="4">
            <StockCard tick="BBBY" />
          </Col>
          <Col lg="4">
            <StockCard tick="MAC" />
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <ShortInt style={{ marginTop: "1rem" }} />
          </Col>
          <Col md="4">
            <div>
              <h5>Has the squeeze happened yet?</h5>
              <p>No short interest too high.</p>
              <p>
                Shorts appear to be exiting their positions. There's a lot of
                speculation about how this is happening, or whether it is truly
                happening at all - there are tactics that can be used to
                "counterfeit" stock or manipulate disclosed short short interest
                - but the short interest numbers we've been following all along
                are definitely trending down.{" "}
              </p>
            </div>
          </Col>
          <Col md="4">
            <MetaTickers />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col lg="4" md="3" sm="2">
            <US />
          </Col>
          <Col lg="4" md="3" sm="2">
            <Canada />
          </Col>
          <Col lg="4" md="3" sm="2">
            <Europe />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col lg="12" md="12" sm="1">
            <Restrictions />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <News />
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
