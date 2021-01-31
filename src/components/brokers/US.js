import React from "react";
import { Table } from "reactstrap";

const US = () => {
  return (
    <div>
      <h2>
        US <i className="fas fa-flag-usa"></i>
      </h2>
      <Table>
        <thead>
          <tr>
            <th>Brokerage</th>
            <th>
              Approval <i className="far fa-clock"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://us.etrade.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-TRADE
              </a>
            </td>
            <td style={{ color: "orange" }}>Slow</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.fidelity.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fidelity
              </a>
            </td>
            <td style={{ color: "orange" }}>Slow</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://investor.vanguard.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vanguard
              </a>
            </td>
            <td style={{ color: "orange" }}>Slow</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.dough.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dough
              </a>
            </td>
            <td style={{ color: "lightgreen" }}>Quick</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.sofi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoFi
              </a>
            </td>
            <td style={{ color: "lightgreen" }}>Quick</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default US;
