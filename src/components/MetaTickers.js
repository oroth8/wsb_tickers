import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Meta from "./Meta";

const MetaTickers = () => {
  const [selTicker, setSelTicker] = useState("GME");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
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
      <Meta ticker1={selTicker} />
    </>
  );
};

export default MetaTickers;
