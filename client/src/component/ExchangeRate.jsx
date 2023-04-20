import React from "react";
import "./exchangeRate.css";

const ExchangeRate = (props) => {


  return (
    <div className="contaner">
      <table className="tBody">
      <h1>Exchange Rate</h1>
        <tr className="trTage">
          <th>Rate</th>
          <th>Source</th>
        </tr>
        {props.Currency.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.rate}</td>
              <td>{value.source}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ExchangeRate;
