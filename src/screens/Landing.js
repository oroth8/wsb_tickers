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
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Col lg="4">
            <Stocks />
          </Col>
          <Col lg="4">
            <Stocks />
          </Col>
          <Col lg="4">
            <Stocks />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Stocks />
          </Col>
          <Col lg="4">
            <Stocks />
          </Col>
          <Col lg="4">
            <Stocks />
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
    </>
  );
};

export default Landing;
