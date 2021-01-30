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
              Time Frame <i className="far fa-clock"></i>
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
            <td>Shares, Options</td>
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
            <td>Increased Margin, Limiting Options Contracts</td>
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
            <td>Increased Margin, Limiting Options Contracts</td>
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
            <td>Increased Margin, Limiting Options Contracts</td>
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
            <td>Increased Margin, Limiting Options Contracts</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Canada;
