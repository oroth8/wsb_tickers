import React from "react";
import { Table } from "reactstrap";

const Europe = () => {
  return (
    <div>
      <h2>
        UK / EU <i className="fas fa-euro-sign"></i>
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
                href="https://freetrade.io/plus"
                target="_blank"
                rel="noopener noreferrer"
              >
                FreeTrade Plus
              </a>
            </td>
            <td style={{ color: "lightgreen" }}>Quick</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.degiro.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Degiro
              </a>
            </td>
            <td style={{ color: "lightgreen" }}>Quick</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://uk.scalable.capital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scalable Capital
              </a>
            </td>
            <td style={{ color: "yellow" }}>Medium</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.hl.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hargreaves Landsdowne
              </a>
            </td>
            <td style={{ color: "yellow" }}>Medium</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.youinvest.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AJ Bell
              </a>
            </td>
            <td style={{ color: "orange" }}>Slow</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.rabobank.com/en/home/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rabobank
              </a>
            </td>
            <td style={{ color: "yellow" }}>Medium</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Europe;
