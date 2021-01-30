import React from "react";
import { Container, Row, Col } from "reactstrap";
import Canada from "../components/Canada";
import Europe from "../components/Europe";
import NavbarHeader from "../components/NavbarHeader";
import Restrictions from "../components/Restrictions";
import Stocks from "../components/Stocks";
import US from "../components/US";
import Logo from "../WallStreetBets.png";

const Landing = () => {
  return (
    <>
      <NavbarHeader />
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
            <h1 style={{ textAlign: "center" }}>Ticker Dashboard</h1>
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
        <Row>
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
        <Row>
          <Restrictions />
        </Row>
      </Container>
    </>
  );
};

export default Landing;
