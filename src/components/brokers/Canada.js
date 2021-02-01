import React from "react";
import { Table } from "reactstrap";

const Canada = () => {
  return (
    <div>
      <h2>
        Canada <i className="fab fa-canadian-maple-leaf"></i>
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
                href="https://www.td.com/ca/en/personal-banking/my-accounts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TD Ameritrade
              </a>
            </td>
            <td style={{ color: "orange" }}>Slow</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.wealthsimple.com/en-ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wealth Simple
              </a>
            </td>
            <td style={{ color: "lightgreen" }}>Quick</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.rbcroyalbank.com/personal.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                RBC Direct Invest
              </a>
            </td>
            <td style={{ color: "yellow" }}>Medium</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scotia iTrade
              </a>
            </td>
            <td style={{ color: "yellow" }}>Medium</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.cibc.com/en/personal-banking.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CIBC
              </a>
            </td>
            <td style={{ color: "orange" }}>Slow</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Canada;
